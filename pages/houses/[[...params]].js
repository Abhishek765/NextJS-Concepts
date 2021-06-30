import { useRouter } from 'next/router';
function House() {
    const router = useRouter();
    const { params = [] } = router.query;
    const houses = [

        {
            name: "House1",
            price: 100_000
        },
        {
            name: "House2",
            price: 100_000_000
        },
        {
            name: "House3",
            price: 100
        },
        {
            name: "House4",
            price: 100_0
        },
        {
            name: "House5",
            price: 100_000
        },
        {
            name: "House6",
            price: 100_000_000_000
        },
        {
            name: "House7",
            price: 100_000_000
        },

    ];
    if (params.length === 1) {

        const filterPrice = params[0];
        const newFilterHouse = houses.filter(house => house.price <= filterPrice);
        return (
            <>
                <h1>All Houses</h1>
                {
                    newFilterHouse.map(house => {
                        return <div key={house.name}>
                            <h1>{house.name}</h1>
                            <p>${house.price}</p>
                        </div>
                    })
                }

            </>

        );

    }
    else if (params.length === 2) {
        const filterPrice = params[1];
        const newFilterHouse = houses.filter(house => house.price > filterPrice);
        return (
            <>
                <h1>All Houses</h1>
                {
                    newFilterHouse.map(house => {
                        return <div key={house.name}>
                            <h1>{house.name}</h1>
                            <p>${house.price}</p>
                        </div>
                    })
                }

            </>

        );


    }
    return (
        <>
            <h1>All Houses</h1>
            {
                houses.map(house => {
                    return <div key={house.name}>
                        <h1>{house.name}</h1>
                        <p>${house.price}</p>
                    </div>
                })
            }

        </>

    );

}

export default House;