class Square5 extends Square{
        constructor(){
                super()
                this.rotates = [
                    [
                        [0, 0, 0, 0],
                        [0, 2, 0, 0],
                        [0, 2, 0, 0],
                        [0, 2, 2, 0]
                    ],
                    [
                        [0, 0, 0, 0],
                        [2, 2, 2, 0],
                        [2, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [2, 2, 0, 0],
                        [0, 2, 0, 0],
                        [0, 2, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 2],
                        [0, 2, 2, 2],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ]
                ]
        }
}
