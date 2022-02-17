import { useState } from 'react';

export default function useSetSideDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return { isDrawerOpen, toggleDrawer };
}
