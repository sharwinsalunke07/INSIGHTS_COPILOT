import React from 'react';
import { classNames } from '../../utils';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames('animate-pulse bg-dark-700/50 rounded-md', className)}></div>
  );
};
