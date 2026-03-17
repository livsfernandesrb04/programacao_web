function transporMatriz(A){
    for(let i = 0; i < 3; i++){
        let AO = ""
        for(let j = 0; j < 2; j++) {
            AO += A[i][j] + " ";
        }
        console.log(AO + "\n")
    }

    for(let j = 0; j < 2; j++){
        let AT = [];
        for(let i = 0; i < 3; i++) {
            AT += A[i][j] + " ";
        }
        console.log(AT + "\n")
    }
}

A = [
    [1, 2],
    [3, 4],
    [5, 6]
]

transporMatriz(A)