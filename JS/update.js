function updateHTML() {
    //Globals
    
    if(data.currentTab === 0) {
        if(data.currentSubTab[1] === 0)
            updateEquipmentUI(0)
        else if(data.currentSubTab[1] === 1)
            updateEquipmentUI(1)
    }
}
