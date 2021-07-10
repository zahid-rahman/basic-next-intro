import axios from 'axios'
import Link from 'next/link'

export const getServerSideProps = async () => {

    // api link 
    // https://jsonplaceholder.typicode.com/users


    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return {
            props: {
                users: response.data
            }
        }
    }
    catch (error) {
        console.error(error)
    }
}


const index = ({ users }) => {

    const userDetails = users.map((user) => {
        const detailsUrl = `/users/${user.id}`
        return <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link href={detailsUrl}>
                    <a className="btn btn-primary">details</a>
                </Link>
            </td>
        </tr>
    })


    return (
        <div className="text-center m-auto">
            <h3>User details</h3>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails}
                </tbody>
            </table>

        </div>
    )
}

export default index
