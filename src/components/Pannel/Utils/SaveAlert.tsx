import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { TriangleAlert } from 'lucide-react';

interface UnsavedChangesAlertProps {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const UnsavedChangesAlert: React.FC<UnsavedChangesAlertProps> = ({ isOpen, onSave, onClose }) => {
  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-red-600">
            <TriangleAlert className="w-8 h-8 mr-2" />
            Unsaved Changes
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg font-semibold">
            Please make sure to save your file. Otherwise, the data will be lost!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave} className="bg-red-600 hover:bg-red-700">
            Save Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UnsavedChangesAlert;