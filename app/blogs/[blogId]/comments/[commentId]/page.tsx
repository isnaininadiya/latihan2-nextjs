export default async function BlogsComments({
    params,
}: {
    params: Promise<{ blogId: string, commentId: string}>

}) {
    const {blogId, commentId} = await params
     return (
        <h1>Comment {commentId} for Blogs {blogId}</h1>
     )
}