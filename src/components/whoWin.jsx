
    // chooseWinner2Playes (myPick, comp1Pick) {
    //     let resultState = {}
    //     const youWin = {isPlayerWin: true, isComp1Win: false, resultMessage: 'You Win', playerScore: this.state.playerScore + 1, comp1Score: this.state.comp1Score - 1}
    //     const youLose = {isPlayerWin: false, isComp1Win: true, resultMessage: 'You Lose', playerScore: this.state.playerScore - 1, comp1Score: this.state.comp1Score + 1}
    //     const draw ={isPlayerWin: null, isComp1Win: null, resultMessage: 'Draw'}
    //     if (myPick === 'rock' && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
    //         resultState = youWin
    //     } else if (myPick === 'rock' && (comp1Pick === 'papper' || comp1Pick === 'spock')) {
    //         resultState = youLose
    //     } else if (myPick === 'papper' && (comp1Pick === 'rock' || comp1Pick === 'spock')) {
    //         resultState = youWin
    //     } else if (myPick === 'papper' && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
    //         resultState = youLose
    //     } else if (myPick === 'scissors' && (comp1Pick === 'lizard' || comp1Pick === 'papper')) {
    //         resultState = youWin
    //     } else if (myPick === 'scissors' && (comp1Pick === 'spock' || comp1Pick === 'rock')) {
    //         resultState = youLose
    //     } else if (myPick === 'lizard' && (comp1Pick === 'spock' || comp1Pick === 'papper')) {
    //         resultState = youWin
    //     } else if (myPick === 'lizard' && (comp1Pick === 'scissors' || comp1Pick === 'rock')) {
    //         resultState = youLose
    //     } else if (myPick === 'spock' && (comp1Pick === 'rock' || comp1Pick === 'scissors')) {
    //         resultState = youWin
    //     } else if (myPick === 'spock' && (comp1Pick === 'papper' || comp1Pick === 'lizard')) {
    //         resultState = youLose
    //     } else if (myPick === comp1Pick) {
    //         resultState = draw
    //                }

    //                this.setState(resultState)
    // }

    // chooseWinner3Playes (myPick, comp1Pick, comp2Pick) {
    //         let resultState = {}
    //         const youAndComp1Win = {isPlayerWin: true, isComp1Win: true, isComp2Win: false,
    //             resultMessage: 'You and Comp1 are Win',
    //             playerScore: this.state.playerScore + 1,
    //             comp1Score: this.state.comp1Score + 1,
    //             comp2Score: this.state.comp2Score - 1}
    //         const youAndComp2Win = {isPlayerWin: false, isComp1Win: false, isComp2Win: true,
    //             resultMessage: 'You and Comp2 are Win',
    //             playerScore: this.state.playerScore + 1,
    //             comp1Score: this.state.comp1Score - 1,
    //             comp2Score: this.state.comp2Score + 1}
    //         const youWin =  {isPlayerWin: true, isComp1Win: false, isComp2Win: false,
    //             resultMessage: 'You Win, Human!',
    //             playerScore: this.state.playerScore + 1,
    //             comp1Score: this.state.comp1Score - 1,
    //             comp2Score: this.state.comp2Score - 1}
    //         const youAndComp1Lose = {isPlayerWin: false, isComp1Win: false, isComp2Win: true,
    //             resultMessage: 'You and Comp1 are Lose',
    //             playerScore: this.state.playerScore - 1,
    //             comp1Score: this.state.comp1Score - 1,
    //             comp2Score: this.state.comp2Score + 1}
    //         const youAndComp2Lose = {isPlayerWin: false, isComp1Win: true, isComp2Win: false,
    //             resultMessage: 'You and Comp2 are Lose',
    //             playerScore: this.state.playerScore - 1,
    //             comp1Score: this.state.comp1Score + 1,
    //             comp2Score: this.state.comp2Score - 1}
    //         const youLose = {isPlayerWin: false, isComp1Win: true, isComp2Win: true,
    //             resultMessage: 'You Lose, Human!',
    //             playerScore: this.state.playerScore - 1,
    //             comp1Score: this.state.comp1Score + 1,
    //             comp2Score: this.state.comp2Score + 1}
    //         const Draw = {isPlayerWin: null, isComp1Win: null, isComp2Win: null,
    //                 resultMessage: 'Draw!',
    //                 playerScore: this.state.playerScore + 0,
    //                 comp1Score: this.state.comp1Score + 0,
    //                 comp2Score: this.state.comp2Score + 0}


    //     if ((myPick === 'rock' && comp1Pick === 'rock') && (comp2Pick === 'scissors' || comp2Pick === 'lizard')) {
    //         resultState = youAndComp1Win
    //     } else if ((myPick === 'rock' && comp2Pick === 'rock') && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
    //         resultState = youAndComp2Win
    //     } else if ((myPick === 'rock' && comp1Pick === 'rock') && (comp2Pick === 'papper' || comp2Pick === 'spock')) {
    //         resultState =  youAndComp1Lose
    //     } else if ((myPick === 'rock' && comp2Pick === 'rock') && (comp1Pick === 'papper' || comp1Pick === 'spock')) {
    //         resultState =  youAndComp2Lose
    //     } else if ((myPick === 'rock' ) && ((comp1Pick === 'scissors' && comp2Pick === 'scissors') || (comp1Pick === 'lizard' && comp2Pick === 'lizard'))) {
    //         resultState = youWin
    //     } else if ((myPick === 'rock' ) && ((comp1Pick === 'papper' && comp2Pick === 'papper') || (comp1Pick === 'spock' && comp2Pick === 'spock'))){
    //         resultState = youLose
    //     }
    //     else if ((myPick === 'papper' &&  comp1Pick === 'papper') && (comp2Pick === 'rock' || comp2Pick === 'spock')){
    //         resultState = youAndComp1Win
    //     } else if ((myPick === 'papper' &&  comp2Pick === 'papper') && (comp1Pick === 'rock' || comp1Pick === 'spock')){
    //         resultState = youAndComp2Win
    //     } else if ((myPick === 'papper' && comp1Pick === 'papper') && (comp2Pick === 'scissors' || comp2Pick === 'lizard')) {
    //         resultState =  youAndComp1Lose
    //     } else if ((myPick === 'papper' && comp2Pick === 'papper') && (comp1Pick === 'scissors' || comp1Pick === 'lizard')) {
    //         resultState =  youAndComp2Lose
    //     } else if ((myPick === 'papper' ) && ((comp1Pick === 'rock' && comp2Pick === 'rock') || (comp1Pick === 'spock' && comp2Pick === 'spock'))) {
    //         resultState = youWin
    //     } else if ((myPick === 'papper') && ((comp1Pick === 'scissors' && comp2Pick === 'scissors') || (comp1Pick === 'lizard' && comp2Pick === 'lizard'))){
    //         resultState = youLose
    //     }
    //     else if ((myPick === 'scissors' && comp1Pick === 'scissors') && (comp2Pick === 'lizard' || comp2Pick === 'papper')) {
    //         resultState = youAndComp1Win
    //     } else if ((myPick === 'scissors' && comp2Pick === 'scissors') && (comp1Pick === 'lizard' || comp1Pick === 'papper')) {
    //         resultState = youAndComp2Win
    //     } else if ((myPick === 'scissors' && comp1Pick === 'scissors') && (comp2Pick === 'spock' || comp2Pick === 'rock')) {
    //         resultState = youAndComp1Lose
    //     } else if ((myPick === 'scissors' && comp2Pick === 'scissors') && (comp1Pick === 'spock' || comp1Pick === 'rock')) {
    //         resultState = youAndComp2Lose
    //     } else if ((myPick === 'scissors' ) && ((comp1Pick === 'lizard' && comp2Pick === 'lizard') || (comp1Pick === 'papper' && comp2Pick === 'papper'))) {
    //         resultState = youWin
    //     } else if ((myPick === 'scissors') && ((comp1Pick === 'spock' && comp2Pick === 'spock') || (comp1Pick === 'rock' && comp2Pick === 'rock'))){
    //         resultState = youLose
    //     }

    //     else if ((myPick === 'lizard' && comp1Pick === 'lizard') && (comp2Pick === 'spock' || comp2Pick === 'papper')) {
    //         resultState = youAndComp1Win
    //     } else if ((myPick === 'lizard' && comp2Pick === 'lizard') && (comp1Pick === 'spock' || comp1Pick === 'papper')) {
    //         resultState = youAndComp2Win
    //     } else if ((myPick === 'lizard' && comp1Pick === 'lizard') && (comp2Pick === 'scissors' || comp2Pick === 'rock')) {
    //         resultState = youAndComp1Lose
    //     } else if ((myPick === 'lizard' && comp2Pick === 'lizard') && (comp1Pick === 'scissors' || comp1Pick === 'rock')) {
    //         resultState = youAndComp2Lose
    //     } else if ((myPick === 'lizard' ) && ((comp1Pick === 'spock' && comp2Pick === 'spock') || (comp1Pick === 'papper' && comp2Pick === 'papper'))) {
    //         resultState = youWin
    //     } else if ((myPick === 'lizard') && ((comp1Pick === 'scissors' && comp2Pick === 'scissors') || (comp1Pick === 'rock' && comp2Pick === 'rock'))){
    //         resultState = youLose
    //     }
    //     else if ((myPick === 'spock' && comp1Pick === 'spock') && (comp2Pick === 'rock' || comp2Pick === 'scissors')) {
    //         resultState = youAndComp1Win
    //     } else if ((myPick === 'spock' && comp2Pick === 'spock') && (comp1Pick === 'rock' || comp1Pick === 'scissors')) {
    //         resultState = youAndComp2Win
    //     } else if ((myPick === 'spock' && comp1Pick === 'spock') && (comp2Pick === 'papper' || comp2Pick === 'lizard')) {
    //         resultState = youAndComp1Lose
    //     } else if ((myPick === 'spock' && comp2Pick === 'spock') && (comp1Pick === 'papper' || comp1Pick === 'lizard')) {
    //         resultState = youAndComp2Lose
    //     } else if ((myPick === 'spock' ) && ((comp1Pick === 'rock' && comp2Pick === 'rock') || (comp1Pick === 'scissors' && comp2Pick === 'scissors'))) {
    //         resultState = youWin
    //     } else if ((myPick === 'spock') && ((comp1Pick === 'papper' && comp2Pick === 'papper') || (comp1Pick === 'lizard' && comp2Pick === 'lizard'))){
    //         resultState = youLose
    //     }
    //     else if ((((myPick === 'spock'||myPick === 'papper')&&(comp1Pick === 'spock'||comp1Pick === 'papper'))&&(comp2Pick === 'rock')) ||
    //     (((myPick === 'spock'||myPick === 'rock')&&(comp1Pick === 'spock'||comp1Pick === 'rock'))&&(comp2Pick === 'scissors'))||
    //     (((myPick === 'scissors'||myPick === 'lizard')&&(comp1Pick === 'scissors'||comp1Pick === 'lizard'))&&(comp2Pick === 'papper')) ||
    //     (((myPick === 'rock'||myPick === 'scissors')&&(comp1Pick === 'rock'||comp1Pick === 'scissors'))&&(comp2Pick === 'lizard')) ||
    //     (((myPick === 'papper'||myPick === 'lizard')&&(comp1Pick === 'papper'||comp1Pick === 'lizard'))&&(comp2Pick === 'spock')))  {
    //         resultState = youAndComp1Win
    //     }
    //     else if ((((myPick === 'spock'||myPick === 'papper')&&(comp2Pick === 'spock'||comp2Pick === 'papper'))&&(comp1Pick === 'rock')) ||
    //     (((myPick === 'spock'||myPick === 'rock')&&(comp2Pick === 'spock'||comp2Pick === 'rock'))&&(comp1Pick === 'scissors'))||
    //     (((myPick === 'scissors'||myPick === 'lizard')&&(comp2Pick === 'scissors'||comp2Pick === 'lizard'))&&(comp1Pick === 'papper')) ||
    //     (((myPick === 'rock'||myPick === 'scissors')&&(comp2Pick === 'rock'||comp2Pick === 'scissors'))&&(comp1Pick === 'lizard')) ||
    //     (((myPick === 'papper'||myPick === 'lizard')&&(comp2Pick === 'papper'||comp2Pick === 'lizard'))&&(comp1Pick === 'spock')))  {
    //         resultState = youAndComp2Win
    //     }
    //     else if ( (myPick === 'rock') &&((comp1Pick === 'scissors'||comp1Pick === 'lizard')&&(comp2Pick === 'scissors'||comp2Pick === 'lizard')) ||
    //     (myPick === 'scissors') &&((comp1Pick === 'lizard'||comp1Pick === 'papper')&&(comp2Pick === 'lizard'||comp2Pick === 'papper'))||
    //     (myPick === 'papper') &&((comp1Pick === 'spock'||comp1Pick === 'rock')&&(comp2Pick === 'spock'||comp2Pick === 'rock'))||
    //     (myPick === 'lizard') &&((comp1Pick === 'spock'||comp1Pick === 'papper')&&(comp2Pick === 'spock'||comp2Pick === 'papper'))||
    //     (myPick === 'spock') &&((comp1Pick === 'rock'||comp1Pick === 'scissors')&&(comp2Pick === 'rock'||comp2Pick === 'scissors'))) {
    //         resultState = youWin
    //     }
    //     else if ( (myPick === 'rock') &&((comp1Pick === 'spock'||comp1Pick === 'papper')&&(comp2Pick === 'spock'||comp2Pick === 'papper')) ||
    //     (myPick === 'scissors') &&((comp1Pick === 'spock'||comp1Pick === 'rock')&&(comp2Pick === 'spock'||comp2Pick === 'rock'))||
    //     (myPick === 'papper') &&((comp1Pick === 'scissors'||comp1Pick === 'lizard')&&(comp2Pick === 'scissors'||comp2Pick === 'lizard'))||
    //     (myPick === 'lizard') &&((comp1Pick === 'rock'||comp1Pick === 'scissors')&&(comp2Pick === 'rock'||comp2Pick === 'scissors'))||
    //     (myPick === 'spock') &&((comp1Pick === 'papper'||comp1Pick === 'lizard')&&(comp2Pick === 'papper'||comp2Pick === 'lizard'))) {
    //         resultState = youLose
    //     }

    //     else if ( ((myPick === comp1Pick)&&(myPick === comp2Pick)&&(comp1Pick === comp2Pick))||
    //     ((myPick != comp1Pick)&&(myPick != comp2Pick)&&(comp1Pick != comp2Pick) &&
    //     ((((myPick === 'rock')||(myPick === 'scissors')||(myPick === 'papper'))&&
    //     ((comp1Pick === 'rock')||(comp1Pick === 'scissors')||(comp1Pick === 'papper'))&&
    //     ((comp2Pick === 'rock')||(comp2Pick === 'scissors')||(comp2Pick === 'papper'))) ||
    //     (((myPick === 'rock')||(myPick === 'spock')||(myPick === 'lizard'))&&
    //     ((comp1Pick === 'rock')||(comp1Pick === 'spock')||(comp1Pick === 'lizard'))&&
    //     ((comp2Pick === 'rock')||(comp2Pick === 'spock')||(comp2Pick === 'lizard'))) ||
    //     (((myPick === 'papper')||(myPick === 'scissors')||(myPick === 'spock'))&&
    //     ((comp1Pick === 'papper')||(comp1Pick === 'scissors')||(comp1Pick === 'spock'))&&
    //     ((comp2Pick === 'papper')||(comp2Pick === 'scissors')||(comp2Pick === 'spock'))) ||
    //     (((myPick === 'scissors')||(myPick === 'spock')||(myPick === 'lizard'))&&
    //     ((comp1Pick === 'scissors')||(comp1Pick === 'spock')||(comp1Pick === 'lizard'))&&
    //     ((comp2Pick === 'scissors')||(comp2Pick === 'spock')||(comp2Pick === 'lizard'))) ||
    //     (((myPick === 'rock')||(myPick === 'papper')||(myPick === 'lizard'))&&
    //     ((comp1Pick === 'rock')||(comp1Pick === 'papper')||(comp1Pick === 'lizard'))&&
    //     ((comp2Pick === 'rock')||(comp2Pick === 'papper')||(comp2Pick === 'lizard')))))
    //     ) {
    //         resultState = Draw
    //                }

    //                this.setState(resultState)
    // }
