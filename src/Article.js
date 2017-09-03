import React, {Component} from 'react'


export default class Article extends Component{         // Class Article
  constructor(props){                                   // Инициализируем Конструктор
    super(props)                                          
    
    this.state = {                                      // Состояния объекта
      isOpen: false                                     // Задаем имя и состояние объекта     
    }
  }

  render(){                                             // метод render
    const {article} = this.props                        // теперь props идет в this
    const {isOpen}  = this.state                        // Передаем в render константу isOpen
    return (
      <div>
        <h1>{article.title}</h1>
        <button onClick={this.toggleOpen}> 
          {isOpen ? 'close' : 'open'}                   
          </button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){                                            // Выносим проверку в отдельные метод 
    if(!this.state.isOpen) return null                  // Если закрыто ничего не делаем
    const {article} = this.props                        // Если открыто возврощаем section 
    return <section>{article.text}</section>
  }
  toggleOpen = () => {                                  // Описание объкта toggleOpen
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

// ***********************************  Более легкий синтакс ******************************//
// export default function Article(props){
//   const {article} = props
//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <section>{article.text}</section>
//     </div>
//   )
// }                 



// *********************************** Более сложный синтакс с ООП подходом ************** //

