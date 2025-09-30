import type { FC } from 'react'
// import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Hero from './Hero'
import ProjectList from './ProjectList'
import Contact from './Contact'
import Footer from './Footer'
import Project from './projects/Project'
import FourOhFour from './FourOhFour'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import rpg from './data/rpg.json'
// import wp from './data/wp-poc.json';

const App: FC = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <ProjectList />
                                <Contact />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/projects/rpg"
                        element={<Project data={rpg} />}
                    />
                    {/* <Route path='/projects/wp-poc' element={<Project data={wp}/>} /> */}
                    {/* update once we have the third project completed */}
                    {/* <Route path='/projects/recipe-saver'>
						<Project data={comingSoon} />
					</Route> */}
                    <Route path="/" element={<FourOhFour />} />
                </Routes>
            </div>
        </Router>
    )
}
export default App
