export default {
    htmlmaker(rack) {
        return `
        <div>
        <h2>${rack.location}</h2>
        <p>${rack.capacity}</p>
        `
    }
}