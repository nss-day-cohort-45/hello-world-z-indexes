// Renders individual citizen objects as HTML

export const Citizen = (citizen) => {
    return `
            <li class="citizen_name">${citizen.name}</li>
           
    `
}