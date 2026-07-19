from fastapi import Fastapi

app = Fastapi()


@app.get("/api/lists")
def getLists():
    return "ciao"


@app.get("/api/list/{id}")
def getList(id):
    return "ciao"
    
@app.post("/api/list")
def createList():
    return "ciao"

@app.patch("/api/list/{id}")
def updateList(id):
    return "ciao"

@app.delete("/api/list/{id}")
def deleteList(id):
    return "ciao"


@app.get("/api/item/{id}")
def getItem(id):
    return "ciao"
    
@app.post("/api/item")
def createItem():
    return "ciao"

@app.patch("/api/item/{id}")
def updateItem(id):
    return "ciao"

@app.delete("/api/item/{id}")
def deleteItem(id):
    return "ciao"