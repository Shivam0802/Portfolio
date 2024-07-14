import React from 'react';
import Project from '../Components/Project';

const ProjectPage = ({theme}) => {
    return (
        <div className="flex flex-row gap-4 items-center justify-center mt-6">
            <Project theme={theme} />
        </div>
    );
}

export default ProjectPage;