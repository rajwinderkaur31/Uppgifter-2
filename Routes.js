
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { TestView } from '../view/TestView'



export const Routes = () => {
   
      return (
        
        <BrowserRouter>
         <Switch>
               <Route exact path={'/home'} component={HomeView} />
               <Route component= {TestView}/>
               </Switch> 
        </BrowserRouter>
        
    )
} 
   