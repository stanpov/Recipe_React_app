import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom'


const isAuth = (WrappedComponent)=>{

    
    const Component = (props)=>{
        const history = useHistory();
        const {user} = useContext(AuthContext)

        if(!user) {
            history.push('/login');
            return null;
        }
        return  <WrappedComponent {...props} />
    }

    return Component
}

export default isAuth