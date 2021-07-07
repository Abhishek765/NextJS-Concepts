// Our component will receive props at build Time(Static generation with data)
function UsersList({ users }) {
    return (
        <>
            <h1> List of Users</h1>

            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }

        </>
    )
}

export default UsersList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    console.log(data);

    return {
        props: {
            users: data
        }
    }
}