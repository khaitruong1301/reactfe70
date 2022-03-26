import { Route } from "react-router-dom"





export const UserTemplate = (props) => {
    //props => props.path = '/login' , props.component = LoginComponent

    return <Route exact path={props.path} render={(propsRoute) => {
        return <div className="d-flex">
            <div className="img" style={{ height: '100vh' }}>
                <img src="https://picsum.photos/2000" alt="..." className="w-100 h-100" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <props.component {...propsRoute} />
                </div>
            </div>
        </div>
    }} />
}