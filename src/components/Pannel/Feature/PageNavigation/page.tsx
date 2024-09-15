import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

// This would typically come from your app's state management
const initialPages = [
  { id: '1', name: 'Home', path: '/home' },
  { id: '2', name: 'Sign In', path: '/signin' },
  { id: '3', name: 'Register', path: '/register' },
  { id: '4', name: 'Dashboard', path: '/dashboard' },
];

const MultiPageNavigation = () => {
  const [pages, setPages] = useState(initialPages);
  const [newPageName, setNewPageName] = useState('');
  const [newPagePath, setNewPagePath] = useState('');
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const addNewPage = () => {
    if (newPageName && newPagePath) {
      const newPage = {
        id: String(pages.length + 1),
        name: newPageName,
        path: newPagePath,
      };
      setPages([...pages, newPage]);
      setNewPageName('');
      setNewPagePath('');
    }
  };

  const deletePage = (id:any) => {
    setPages(pages.filter(page => page.id !== id));
  };

  const switchToPage = (page:any) => {
    setCurrentPage(page);
    // Here you would typically update your app's state to switch the active page
    console.log(`Switching to page: ${page.name}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-1 bg-slate-100 border-slate-300" variant="outline">
          {currentPage.name}
          <ChevronDown size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Pages</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell>{page.name}</TableCell>
                  <TableCell>{page.path}</TableCell>
                  <TableCell>
                    <Button onClick={() => switchToPage(page)} variant="outline" size="sm">
                      Switch
                    </Button>
                    {pages.length > 1 && (
                      <Button onClick={() => deletePage(page.id)} variant="destructive" size="sm" className="ml-2">
                        Delete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="grid grid-cols-3 gap-2">
            <Input
              placeholder="Page Name"
              value={newPageName}
              onChange={(e) => setNewPageName(e.target.value)}
            />
            <Input
              placeholder="Page Path"
              value={newPagePath}
              onChange={(e) => setNewPagePath(e.target.value)}
            />
            <Button onClick={addNewPage}>Add Page</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MultiPageNavigation;