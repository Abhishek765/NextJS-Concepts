import User from "../components/user";

// Our component will receive props at build Time(Static generation with data)
function UsersList({ users }) {
    return (
        <>
            <h1> List of Users</h1>

            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }

        </>
    )
}

export default UsersList

// Runs only Server side
// Therefore, we can do backend operations here like DB queries, handling files using fs module and so on.
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}