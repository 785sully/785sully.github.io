import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectItemProps } from './types/projectData'

const ProjectItem: FC<ProjectItemProps> = ({ data }) => {
    return (
        <>
            <Link to={data.link}>
                <div className="card">
                    <h3>{data.title}</h3>
                    <img src={data.thumbImageUrl} alt={data.thumbImageAlt} />
                    <p>{data.shortDescription}</p>
                </div>
            </Link>
        </>
    )
}

export default ProjectItem
