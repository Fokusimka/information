import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Input from './components/input/input';
import Button from './components/button/button';
import TabView from './components/tabView/tabView';
import Text from './components/text/text'
import { observer } from "mobx-react-lite"
import {useStore} from './store/store';

const App = observer(() => {
  const { childrens, parent } = useStore()

  const [arrayChildrens, setArrayChildrens] = React.useState(childrens.items)
  const [parentName, setParentName] = React.useState(parent.name)
  const [parentAge, setParentAge] = React.useState(parent.age)

  const addEmptyChildren = () => {
    setArrayChildrens([...arrayChildrens, {name: '', age: ''}])
  }

  const deleteEmptyChildren = (id: number) => {
    let newArray = arrayChildrens.filter((child, index) =>  index !== id)
    setArrayChildrens(newArray)
  }

  const saveAll = () => {
    parent.updateParent({newName: parentName, newAge: parentAge})
    childrens.addChildren(arrayChildrens)
  }

  const tabs = ['Форма', 'Превью']

  const tabsComponents = [
      <>
        <div className='mainContent'>
          <section className='form'>
            <h2>Персональные даные</h2>
            <Input placeholder='Имя' initialValue={parentName} onChangeInput={(newValue) => setParentName(newValue)} />
            <Input placeholder='Возраст' initialValue={parentAge} onChangeInput={(newValue) => setParentAge(newValue)} />
          </section>
  
          <section className='form'>
            <h2 className='titleWithButton'>Дети (макс.5) {arrayChildrens.length < 5 && <Button type='add' text='Добавить ребёнка' onClick={() => addEmptyChildren()} />}</h2>
            {arrayChildrens.length !== 0 ? (
              arrayChildrens.map((children, index) => {
                return (
                  <div className='formItem'>
                    <Input placeholder='Имя' initialValue={children.name} onChangeInput={(e) => arrayChildrens[index].name = e} />
                    <Input placeholder='Возраст' initialValue={children.age} onChangeInput={(e) => arrayChildrens[index].age = e} />
                    <Button type="outline" text="Удалить" onClick={() => deleteEmptyChildren(index)}/>
                  </div>
                )
              })
            ) : (
              <div className='emptyList'>Список пуст</div>
            )}
            <Button type='primary' text='Сохранить' onClick={() => saveAll()} />
          </section>
        </div>
      </>,
      <>
        <div className='mainContent'>
          <section className='form'>
            <h2>Персональные даные</h2>    
            {parent.name !== '' && parent.age !== '' ? (
              <Text text={`${parent.name}, ${parent.age} лет`} type='outline' />
            ) : <div className='emptyList'>Данные не заполнены</div>}
          </section>
  
          <section className='form'>
            <h2 className='titleWithButton'>Дети</h2>
              <div className='form formGap'>
                {childrens.items.length !== 0 ? (
                   childrens.items.map((children) => {
                    return (
                      <Text text={`${children.name}, ${children.age} лет`} />
                    )
                  })
                ) : <div className='emptyList'>Список пуст</div>}
              </div>
          </section>
        </div>
      </>
  ]


  return (
    <section className='page'>
      <TabView tabs={tabs} tabsComponents={tabsComponents} />
      <Footer/>
    </section>
  );
})

export default App;
