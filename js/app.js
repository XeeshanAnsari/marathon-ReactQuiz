
var questions = [
    ["What is part of a database that holds only one type of information???",'Report' ,'Field','File','B'],
    ['OS computer abbreviation usually means ???','Open Software ','Optical Sensor','Operating System','C'],
    ['Which is a type of Electrically-Erasable Programmable Read-Only Memory?' ,'Flash','FRAM','Flange','A'],
    ['Who developed Yahoo?','Vint Cerf & Robert Kahn','Steve Case & Jeff Bezos','David Filo & Jerry Yang','C'],
    ['The most common format for a home video recorder is VHS. VHS stands for...??','Video Home System','Very high speed','Voltage house standard','A']

] ;

var  pos = 0, correct = 0 , choice ,percentage;
var quizName , quizDes , quizTime ;


var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             correct: this.props.correct,
             pos: this.props.pos,
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
         }
     },
  
     _checkAnswer: function(e){
          choices = document.getElementsByName('answer');
          console.log(choices);
          for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
            if(choice == this.props.data[pos][4]){
                this.setState({
                    correct: correct++,
                })
                
            }
          this.setState({
            pos: ++pos,
          }) 
          if(pos < this.props.data.length){
              this.setState({
               
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
            
        })
          }
       
          
        

     },
     _showQuestion: function(){
           
            if(this.state.pos >= this.props.data.length){
               percentage = correct*20;
              return React.DOM.div(
                    {
                        id:'complete'
                    },
                    React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "PERCENTAGE"),
                      React.DOM.h2(null, percentage + ' %')
                      ),
                     React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "CORRECT ANSWER"),
                      React.DOM.h2(null, correct)
                      )
                 )
             } else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(
                             {
                                 id:'status'
                             },
                            React.DOM.h1(null,"QUESTION "+ (this.state.pos+1) +" OF " +this.props.data.length )
                          ),
                         React.DOM.h4(
                             {
                                 id:'question'
                             }, (this.state.pos+1) +'.  '+this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'B'                          
                                 }
                             ),
                             this.state.opt2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'C'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                    id:'nextBtn', 
                                    type: "button",
                                    onClick: this._checkAnswer
                                 },
                                 'NEXT'
                             )
                     );
             }
         
                 
     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( 
                    {
                    id: 'header'
                    },
                    React.DOM.h1(null," QUIZ  GAME  COMPUTER  SCIENCE")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     {
                        id:'test'
                     },
                     this._showQuestion() 
                  )  
             )
         )
     }
});


// component for main
var MainPage = React.createClass({
    getInitialState:function(){
        return {
            initialData:this.props.initialData,
        }

    },

    // createQuestion function for insert question
     _createQuestion: function(){
        // return React.DOM.div({id:'createQuestion'},
        //        React.DOM.div(null,
                
        //           React.DOM.form(
        //               {
                        
        //               },
                       
        //               React.DOM.input(
        //                   {
        //                       type:'text',
        //                       id:'addQuestion',
                              
        //                   }),
                          
        //               React.DOM.input(
        //                   {
        //                       type:'text',
        //                       id:'addOpt1'
        //                   }),
        //                React.DOM.input(
        //                   {
        //                       type:'text',
        //                       id:'addOpt2'
        //                   }),
        //              React.DOM.input(
        //                   {
        //                       type:'text',
        //                       id:'addOpt3'
        //                   })
                                               
        //               )
        //        )
        //     )
        
    },
       
        // for addQuestion
    _saveQuestion: function(){
       var quizName = document.getElementById('quizName').value; 
       var addQues = document.getElementById('addQuestion').value;
       var addOpt1 = document.getElementById('addOpt1').value;
       var addOpt2 = document.getElementById('addOpt2').value;
       var addOpt3 = document.getElementById('addOpt3').value;
       var addAns = document.getElementById('addAns').value;
       addAns = addAns.toUpperCase;
          
         
        
       
       var data = this.state.initialData;
       data.push([addQues,addOpt1,addOpt2,addOpt3,addAns])
        console.log(data)
       this.setState({
           initialData : data

       })
      
      
    
 },

    // createQuiz
    _createQuiz: function(){
       return (
           
              React.createElement(quizRender,
                {
                    data: this.state.initialData,
                    pos: pos,
                    correct: correct,
                }
               )

          )
    },
    render: function(){
        return (
            React.DOM.div(null,
               React.DOM.div(null,
                  React.DOM.button({
                      id: 'createQuiz',
                      type: 'submit',
                      onClick:  this._createQuestion
                  },'Create Quiz'),
                  
                  React.DOM.button({
                      id: 'createQuiz',
                      type: 'submit',
                      onClick: this._createQuiz
      
                  },'Attempt Quiz'),
                   React.DOM.div(
                      null,
                       
                       React.DOM.input(
                          {
                              type: 'text',
                              id:'quizName',
                              placeholder: 'Quiz name'

                          }),
                      React.DOM.input(
                          {
                              type: 'text',
                              id:'quizDes',
                              placeholder: 'Quiz Description'

                          }), 
                    React.DOM.input(
                          {
                              type: 'text',
                              id:'quizTime',
                              placeholder: 'Quiz Time'

                          }),

                      React.DOM.input(
                          {
                              type: 'text',
                              id:'addQuestion',
                              placeholder: ' Write Question'
                              
                          }),
                          
                      React.DOM.input(
                          {
                              type: 'text',
                              id:'addOpt1',
                              placeholder: 'Option One'

                          }),
                       React.DOM.input(
                          {
                              type: 'text',
                              id:'addOpt2',
                              placeholder: 'Option two'
                          }),
                     React.DOM.input(
                          {
                              type:'text',
                              id:'addOpt3',
                              placeholder: 'Option three'
                          }),
                     React.DOM.input(
                          {
                              type:'text',
                              id:'addAns',
                              placeholder: 'Answer'
                          }),     
                     React.DOM.input(
                         {
                             type : 'submit',
                             value: 'submit',
                             name: 'submit',
                             onClick: this._saveQuestion
 
                         })
                                               
                   ),
                   React.createElement(quizRender,
                {
                    data: questions,
                    pos: pos,
                    correct: correct,
                }
               )
                  
                 

               )
            )
        )
    }
})


ReactDOM.render(
    React.DOM.div(
       null,
    //    React.createElement(quizRender,
    //    {
    //        data: questions,
    //        pos: pos,
    //        correct: correct,
    //    }
    //    )
    React.createElement(MainPage,
    {
        initialData: questions,
        qName : quizName
       
    })
    
    ),
    document.getElementById('app')
);