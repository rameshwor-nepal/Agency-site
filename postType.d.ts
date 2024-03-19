interface GetPosts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface GetPostUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string | number;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number
        }
    };
    phone:number;
    website:string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

interface DbUser{
    username: string;
    email: string | null;
    password: string | null;
    img: string | null;
    isAdmin: boolean;
}

interface DbPost{
    title: string;
    img: string | null;
    body: string;
    userId: string | number;
    slug: string | number;
    created_on: string;
}