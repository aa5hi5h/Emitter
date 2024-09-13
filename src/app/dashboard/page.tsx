"use client";

import DashboardOptions from "@/components/DashboardOptions";
import { Bolt, Ellipsis, FolderPen, Trash2, TriangleAlert } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Id } from "../../../convex/_generated/dataModel";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import lz from "lzutf8";
import { useEditor } from "@craftjs/core";
import { ProjectContext } from "../Context/LoadState";



type Project = {
  _id: Id<"projects">;
  title: string;
  userId: string;
  savedState?: any;
  createdAt: number;
  updatedAt: number;
};


const Dashboard = () => {
  const projects = useQuery(api.project.getProjects);
  const updateProject = useMutation(api.project.updateProject);
  const deleteProject = useMutation(api.project.deleteProject);
  const router = useRouter();

  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [isDeleteAlertOpen,setIsDeleteAlertOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Id<"projects"> | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [newProjectTitle, setNewProjectTitle] = useState("");

  const { isProjectOpening, setIsProjectOpening } = useContext(ProjectContext);


  const handleProjectClick = (projectId: Id<"projects">) => {
    setIsProjectOpening(true)
    router.push(`/build/${projectId}`);
  };

  useEffect(() => {
    console.log("PROJECT_OPENING", isProjectOpening);
}, [isProjectOpening]);

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleUpdateClick = (project: Project) => {
    setCurrentProject(project);
    setNewProjectTitle(project.title);
    setIsUpdateDialogOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (currentProject) {
      try {
        await updateProject({ 
          projectId: currentProject._id, 
          title: newProjectTitle, 
          savedState: currentProject.savedState || JSON.stringify({})
        });
        setIsUpdateDialogOpen(false);
      } catch (error) {
        console.error("Failed to update project:", error);
      }
    }
  };

  const handleDeleteClick = (projectId: Id<"projects">) => {
    setProjectToDelete(projectId);
    setIsDeleteAlertOpen(true);
  };

  const confirmDelete = async () => {
    if (projectToDelete) {
      try {
        await deleteProject({ projectId: projectToDelete });
        setIsDeleteAlertOpen(false);
      } catch (error) {
        console.error("Failed to delete project:", error);
      }
    }
  };

  return (
    <div className="grid grid-cols-5 md:grid-cols-6 h-[88vh]">
      <div className="col-span-1 hidden lg:flex border-r border-slate-300 h-full">
        <DashboardOptions />
      </div>
      <div className="col-span-5 px-8 py-6">
        <h2 className="text-4xl w-full font-semibold tracking-tight whitespace-nowrap">
          Recent Projects
        </h2>
        <div className="bg-yellow-500/25 p-3 mt-2 flex-col rounded-md sm:flex sm:flex-row items-center gap-x-2 mb-6">
          <TriangleAlert className="size-8 justify-center sm:size-6" />
          <h4>
            To ensure fair use, you're currently limited to creating up to 5 projects. 
            Unlock unlimited projects with our upcoming premium plan!
          </h4>
        </div>
        
        {projects === undefined ? (
          <div>Loading projects...</div>
        ) : projects === null ? (
          <div>Error loading projects. Please try again later.</div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project._id}
                className="p-4 flex justify-between items-center bg-slate-200 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleProjectClick(project._id)}
              >
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date(project.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger onClick={handleDropdownClick}>
                    <Ellipsis size={28} className="p-1 hover:bg-slate-400 rounded-lg" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent onClick={handleDropdownClick} className="ml-20">
                    <DropdownMenuLabel className="flex gap-x-1 items-center">
                      <Bolt size={16} />
                      Settings
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleUpdateClick(project)}>
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteClick(project._id)} className="flex gap-x-1 items-center">
                      <Trash2 color="red" size={16} />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        ) : (
          <p>No projects found. Create your first project to get started!</p>
        )}
      </div>

      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Project</DialogTitle>
          </DialogHeader>
          <Input
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            placeholder="Enter new project name"
          />
          <DialogFooter>
            <Button className="bg-[#5C3B58] hover:bg-[#5C3B58]/80" onClick={handleUpdateSubmit}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              project and remove all of its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-[#5C3B58] hover:bg-[#5C3B58]/80" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;