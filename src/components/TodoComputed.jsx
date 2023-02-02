const TodoComputed = ({ computedItemsLeft }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
            <span className="text-gray-400">{computedItemsLeft} item por completar </span>
            <button className="text-gray-400">Eliminar las completadas</button>
        </section>
    );
};

export default TodoComputed;