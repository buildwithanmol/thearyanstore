export default function ProductId({params}: {params: {productId: string}}) {
    return <main>
        {params.productId}
    </main>
}