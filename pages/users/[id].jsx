import axios from 'axios'

export const getServerSidePaths = async () => {

    // api link 
    // https://jsonplaceholder.typicode.com/users/

    const response = await axios(`https://jsonplaceholder.typicode.com/users/`);

    const paths = response.data.map((user) => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getServerSideProps = async ({ params }) => {

    // api link 
    // https://jsonplaceholder.typicode.com/users/:id

    const { id } = params; // comming from context


    try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = response.data
        return {
            props: {
                user
            }
        }
    }
    catch (error) {
        console.error(error)
    }
}


const userId = ({ user }) => {

    return (
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-xl-3 offset-lg-3 offset-md-3">
                <div className="list-group">
                    <h3 className="list-group-item list-group-item-action active" aria-current="true">
                        {user.name}
                    </h3>


                    <p className="list-group-item list-group-item-action">
                        <b>Username :</b> {user.username}
                    </p>


                    <p className="list-group-item list-group-item-action">
                        <b>Email :</b> {user.email}
                    </p>


                    <p className="list-group-item list-group-item-action">
                        <b>Phone :</b> {user.phone}
                    </p>


                    <p className="list-group-item list-group-item-action">
                        <b>website :</b> {user.website}
                    </p>

                    <p className="list-group-item list-group-item-action">
                        <b>Address/city :</b> {user.address.city}
                    </p>


                    <p className="list-group-item list-group-item-action">
                        <b>Working at :</b> {user.company.name}
                    </p>

                </div>
            </div>
        </div>

    )
}

export default userId;
