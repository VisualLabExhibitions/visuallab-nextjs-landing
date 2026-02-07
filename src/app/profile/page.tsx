


async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'});
    return res.json();
}

export default async function PostsPage(){
    const posts = await getPosts();
    return (
        <ul>
            {posts.map(post => <li key="post.id">{post.title}</li>)}
        </ul>
    );
}

