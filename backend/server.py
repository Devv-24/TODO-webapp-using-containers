from fastapi import Fastapi
import api 

app = Fastapi()


@app.get("/api/list")
def getLists():
    return api.getLists()


@app.get("/api/list/{id}")
def getList(id):
    return api.getList(id)
    
@app.post("/api/list")
def createList():
    return api.createList()

@app.patch("/api/list/{id}")
def updateList(id):
    return api.updateList(id)

@app.delete("/api/list/{id}")
def deleteList(id):
    return api.deleteList(id)


@app.get("/api/item/{id}")
def getItem(id):
    return api.getItem(id)
    
@app.post("/api/item")
def createItem():
    return api.createItem()

@app.patch("/api/item/{id}")
def updateItem(id):
    return api.updateItem(id)

@app.delete("/api/item/{id}")
def deleteItem(id):
    return api.deleteItem(id)