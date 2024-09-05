window.onload = function() {
    const button = document.getElementById("ADD");
    button.addEventListener('click', () => {
        const checkList = document.getElementById("checklist");
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.getElementById("hodo");
        const taskName = input.value;

        if (taskName.trim() === '') {
            alert("pls enter task name");
            return;
        }

        label.innerHTML = `<input type="checkbox"  /> ${taskName}`;
        li.appendChild(label);
        checkList.appendChild(li);
    });
};