function CarPage({params}: { params: {id: string}}): JSX.Element {
    return <div>
        The car id is {params.id}
    </div>
}

export default CarPage