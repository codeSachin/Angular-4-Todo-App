export class Init{
    load(){
        if(localStorage.getItem('todos')===null || localStorage.getItem('todos')===undefined){
            console.log("No todos found...... creating....");
            var todos = [
                {
                  text: 'Eat lunch',
                },
                {
                  text: 'Eat dinner',
                }
              ];
              localStorage.setItem('todos', JSON.stringify(todos));
              return;
        }
        else{
            console.log('Found Todos');
        }

    }
}