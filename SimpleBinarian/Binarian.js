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

const BinarianLetters = 
{
    a:"(00001)",
    b:"(00010)",
    c:"(00011)",
    d:"(00100)",
    e:"(00101)",
    f:"(00110)",
    g:"(00111)",
    h:"(01000)",
    i:"(01001)",
    j:"(01010)",
    k:"(01011)",
    l:"(01100)",
    m:"(01101)",
    n:"(01110)",
    o:"(01111)",
    p:"(10000)",
    q:"(10001)",
    r:"(10010)",
    s:"(10011)",
    t:"(10100)",
    u:"(10101)",
    v:"(10110)",
    w:"(10111)",
    x:"(11000)",
    y:"(11001)",
    z:"(11010)",
    æ:"(11011)",
    ø:"(11100)",
    å:"(11101)"
}

const Specials = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function ToBinarian(Data) {
    const LowerData = Data.toLowerCase();
    let ArrayData = []
    let TempDigits = ""

    for (let Count = 0; Count < LowerData.length; Count++) {
        const Character = LowerData[Count];

        if (/\d/.test(Character)) {
            TempDigits += Character;
        } 
        
        else {
            if (TempDigits) {
                ArrayData.push(TempDigits);
                TempDigits = ""
            }
            ArrayData.push(Character);
        }
    }

    if (TempDigits) {
        ArrayData.push(TempDigits);
    }

    let BinarianData = '';

    console.log(ArrayData);

    for (Count = 0; Count < ArrayData.length; Count++) {
        if (/\d/.test(ArrayData[Count])) {
            console.log(ArrayData[Count] + " twas a number.");
            BinarianData += "[" + (((Number(ArrayData[Count]) >>> 0).toString(2)).padStart(8, '0')) + "]";
        } 
        
        else {
            if (Specials.test(ArrayData[Count])) {
                console.log(ArrayData[Count] + " twas special.");
                BinarianData += ArrayData[Count];
            } 
            
            else {
                console.log(ArrayData[Count] + " twas a string.");
                BinarianData += BinarianLetters[ArrayData[Count]];
            }
        }
    }

    BinarianOutput.innerHTML = BinarianData;
    return BinarianData;
}

function FromBinarian(Data) {

}