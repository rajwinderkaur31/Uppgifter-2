import{ useHistory} from 'react-router-dom'



export const DesktopNavigation = () => {
    const history = useHistory()


    return (
        <div>
             
            <span  onClick={() => history.push('/test')}>test</span>                  
            <span  onClick={() => history.push('/')}>home</span>                  
            
        </div>
    
    )
    
}