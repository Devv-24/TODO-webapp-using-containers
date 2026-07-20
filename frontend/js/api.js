export async function getLists(userId) {
    const response = await fetch('/api/list', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function getList(userId, id) {
    const response = await fetch(`/api/list/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function createList(userId, data) {
    const response = await fetch('/api/list', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
}

export async function updateList(userId, id, data) {
    const response = await fetch(`/api/list/${id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    });
}

export async function deleteList(userId, id) {
    const response = await fetch(`/api/list/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function getItem(userId, id) {
    const response = await fetch(`/api/item/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function createItem(userId, listId, data) {
    const response = await fetch(`/api/item`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function updateItem(userId, id, data) {
    const response = await fetch(`/api/item/${id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function deleteItem(userId, id) {
    const response = await fetch(`/api/item/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}