/* Binarian-Web Copyright (C) 2025 Lyxminx and Sarahtonin

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>. */

document.getElementById("ArtiBox").style.height = (document.getElementById("MainBox").offsetHeight)-(document.getElementById("HeadBox").offsetHeight)-(document.getElementById("FootBox").offsetHeight)-50

console.log("Head: "+document.getElementById("HeadBox").offsetHeight)
console.log("Main: "+document.getElementById("MainBox").offsetHeight)
console.log("Foot: "+document.getElementById("FootBox").offsetHeight)

const AsideHeight = document.getElementById("AsideBox").offsetHeight
const NavHeight = document.getElementById("NavBox").offsetHeight
const Imgs = document.querySelectorAll("img")
const ImgCount = Imgs.length

let ImgHeight = 0
Imgs.forEach(img => {
    ImgHeight += img.offsetHeight
})

document.querySelectorAll("figure").forEach(fig => {
    fig.style.margin = (NavHeight - ImgHeight) / ImgCount +"px" +" auto "+ (NavHeight - ImgHeight) / ImgCount +"px"
})

const AsideWhiteSpace = AsideHeight-NavHeight

document.getElementById("NavBox").style.margin = AsideWhiteSpace/2+"px" +" auto "+ AsideWhiteSpace/2+"px"

console.log("Head+Foot: "+(document.getElementById("HeadBox").offsetHeight+document.getElementById("FootBox").offsetHeight))
console.log((document.getElementById("MainBox").offsetHeight)-(document.getElementById("HeadBox").offsetHeight)-(document.getElementById("FootBox").offsetHeight))