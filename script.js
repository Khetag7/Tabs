"use strict"

function TabFunc()
{
	this.buttons = document.querySelectorAll("._buttontab")
	this.contents = document.querySelectorAll("._contentTab")
	this.Check = function()
	{
		this.buttons.forEach((element, index) =>
		{
			element.addEventListener('click', ()=>
			{
				this.delActive(this.buttons, 'active')
				this.delActive(this.contents, 'active')
				element.classList.add('active')
				this.contents[index].classList.add('active')
			})
		})
	}
	this.delActive = function(array, nameClass)
	{
		array.forEach((element)=>
		{
			element.classList.remove(nameClass)
		})
	}
}
let Tab = new TabFunc
Tab.Check()