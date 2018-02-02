import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  Header  from './Header'
// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div> 
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <a href="/surveys"> survey</a> 
                    <a href="surveys/new"> survey new</a>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div> 
            </BrowserRouter> 
        </div>
    )
}

export default App