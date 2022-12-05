// The revealing module pattern allows to make a private varaiables or functions.

const myModule = (
    () => {
        const add = () => {
            console.log("private function");
        }
        return {
            render : () => {
                console.log("render");
            }
        }
    }
)()


myModule.render(); 
myModule.add() // isn't going to work because it's not exposed and hence it's private