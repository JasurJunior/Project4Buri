const app = Vue.createApp(
   {
   data()
      {
      return{
            counter: 0,
            h1: 'counter',
            h2: 'list add',
            placeStr: 'write adder...',
            inputVal: '',
            }
      },

      methods:
         {
         addNote()
            {
            if (this.inputVal !== '')
               {
               list.notes.push( this.inputVal )
               this.inputVal = ''
               }
            },
         del( dl, event )
            {
            console.log(list);
            list.notes.splice(dl, 1)
            },
         },
      
      watch: // qaysidir varible(var)ni uzgarishini kuzatishimiz mumkin !!!
         {
         inputVal( val ) // kuzatayotgan var bilan bir xil nomda bulishi kerak!
            {
            //inputVal uzgarsa bu funksiya ishledi !!!
            if (val.length > 17) this.inputVal = ''
            }
         }
   })


app.mount('#app')


const list = Vue.createApp(
   {
   data()
      {
      return{
            notes: ['list №1'],
            as: app.inputVal,
            }
      },

      methods:
         {
         delOn( index, event )
            {
            app._component.methods.del( index )
            },
         say( arg )
            {
            console.log(this);
            arg.srcElement.attributes[0].nodeValue += "color: crimson;" // add style to path 
            arg.target.childNodes[0].data += "                        dont press again!"
            },
         },

      computed: // notes uzgarsa bu ishledi !!!
         {
         doubleFun( )
            {
            let lenVar = this.notes.length
            return this.notes[lenVar - 1] + ' ' + this.notes[lenVar - 1].length + 'simbol'
            }
         },
   })
   
   
list.mount('#lists')