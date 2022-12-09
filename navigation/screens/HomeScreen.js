import React from 'react';
import {
  View, 
  StyleSheet, 
  Image,
  Text,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';

import {useFonts} from "expo-font";

const HomeScreen = props => {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
      
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo2.png')}
        />

        <TouchableOpacity  onPress={() => props.navigation.navigate('AddPost')}>
            <Image style={{
              top: 0,
              width:30,
              height: 20,
              right:-150,
            }} source={require('../../assets/images/plus-small.png')} />
          </TouchableOpacity>
      </View>

      <View style = {styles.lineStyle} />  

  {/* 1 post */}

          <View style={styles.postEach}>          
            <Image style={styles.userPhoto} source={{ uri:"https://media.self.com/photos/5f490e4e4a75ee30a626683e/4:3/w_2560%2Cc_limit/woman_food_donut.jpeg" }}/>
            <Text style={styles.userName}>SamanthaLevy</Text>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text>Al Forno</Text>
            </View>

              <Image style={styles.userPost} source={{ uri:"https://cdn.discordapp.com/attachments/1021850459327184978/1034472218983403550/IMG_0339.png" }}/>
              <View style={styles.row}>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
              </TouchableOpacity>
              <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
              </TouchableOpacity>
            </View>
            
            <View style = {styles.linePost}/>  
          </View>

          
  {/* end */} 

  {/* 2 post */}

          <View style={styles.postEach}>          
            <Image style={styles.userPhoto} source={{ uri:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }}/>
            <Text style={styles.userName}>DavidSummers</Text>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text>Mendi</Text>
            </View>

              <Image style={styles.userPost} source={{ uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGh4eGhwcHB4cHB4aGhoaIRweHCEeIS4lHh4rIRoaJzgmKy8xNTU1HCU7QDs0Py40NTEBDAwMEA8QHxISHzEsJSs2ND00NDQ0Nj00NjE0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABCEAABAgMFBQYFAQYFAwUAAAABAhEAAyEEEjFBUQUiYXGRMoGhsdHwBhNCweFSFGJykqLxByMzwtIVU4JDY7Li8v/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACsRAAICAgIBAwMCBwAAAAAAAAABAhEDIRIxQQQiURMyYXGBFEKRobHB8f/aAAwDAQACEQMRAD8AKCDkPCPbhOT8hHXhqOfsxYlQNH6Vbxjyz0ysE6GJNz6fiJlIbtefrHqSMi/X1jhSu6ca9PzHtwthTj+RF7DB/ExwUNSe8xwbB7pw9+DR5d1fx9DBC65++4R4JZGfgfSOOspCOHhHp1r4xcEF8T0PpEq5nw/ECjrKAT7b7xxJ49w9IOs9mWvsJUrinDrgILTsVf1rQjmpz/TFIwk+kK5xXbEyQTkfOPVhWh6H7Q7Ts6WO1PUf4Ut4lUSFks/6pp70j7QywyEeaIjN7CvT1iKUHV+f94f/ALLZ9ZvVPpHn/TpB7MxaeaQfIiO+jI760REytPD8xG7mT76mHS9iA9iahXPcPi8C2nZkxFTLU2oJWO+67d8K8cl4GWSL6Yvuj3/aPAgaRYSBWvU+kRMwaE++UJQ1kbo4xG4Dl5xMrGhjy8Pf9o5HFPyhoekRVShB6GCAsZ0itahkC9deEE4qUg6HofSIfLOST0p5Rdc59Y5JAxGPIVgDEEIOh6DjFl4Aex94ibvDuj1SAGcCuFKwDjnH6vEx0eU9iOjjidwe/wC0e3Q2Hh+IkUe/Yjvl8D77oJxyQDh/8fxErozHvpEG4RYlPto4U8CU5+XqI4pGGXKkTU2gjy6PbQTiCZeg+0TSjV+4/mLrJZVrVdQCdTkBqTkIcyZMuTg0yZ+ojdT/AAj7w8MbkJKaiBWfY6lC8vcRqslzyTiYLTLs8vsovq/Uuo7k4dYptNrKi6lOYEVNjRGEYmeU5SGM7aK1UvMNBQdBAipvGBTMjnMM5C8QlKovQIDs10qZSro14w2lrShxQffSF5h4ga5gBIBwLRD5ke27ZN9KrpKVnBSVMOBPpCizWeahIRNUSpyyhS8HLMc6QFN+Q8fgbiZxgiTa1p7KiO+FiEkBq99TFiSYZSFcRqu0IX/qISo/qG6rqMYFn7HCqyVBX7qmCxyOB8IoQuL0TGwjnGMuwxnKPQpmyylwpJBGRDHo0QKPbfiNGqciYLs1N4ZK+ocjC627LKBeSQtB+phTgoZRCWJx2ui8cqen2K7uo8HiucG7xizaQUUYYU5RRaUYZBsu6JorZQMPyfSLhvNSg90ikKpp5+dBEpaQACc/HpHM49LCuDax4upcnDM/2j0kcI4rNfz6wpx13iOh9I6PL37p/ljo47ZcuYW58I8E1Wvh6QGm1pNWPgY9/ak5v0TBDQWqcoadD6xJNpPD+aAv2lOh6D1j39pSC109fzHUdQeZ5/T/AFfiDNnWdc1WDIHaUcBy1PCBNlWX5y7ovAAOpRIISPXQQ8tNoCQEIDIThxOp4xbHjvb6I5J8dLslabQlCbiBdTnqo6qhXNtJZortM+F06dF266IV5YSufFslJVCxBfE0gnZW0QqYoXk3EgAEVD5udcKB4RyrsNDVEpLdqukXIlgu2WOo7olaRuOgKc4G7UcWI8xFljsoDLW6VMzEjMv3mJtuwroplWcB7wfMKbANpFCkTEmgdKagg4g6eMM1KKr1Eim6Hc8iBCy2SFqQm8VJbEJJ3q+kKxkTRPJBSS6TrS7qDwiYWpSSAoKQobtBeevZJpGbtSlpQUyb6CFO6iVKYVPaelfBodbFlbiCtRVdUSKAl6vhxJhU9hapBFnkuCVUODPgdIsRde6KkAXmOEQn2tIN5abiSW3ixPHlA1jni+hKcVi8xNWY1J1LeEdzppI7je2FKlhw2YfujkoiyZLJWFXd5QYY0Aq1KDvg6ZZg1Rl3uIrGTEaQAHgizWgpNMMwcDzi2UE3RUHQ6/mBrSUgtgWds4rGRNort9hcGZKw+pGnFLYjhGetKyq65wfAZU1jTWaeQXBrAW29nAgz5aQwf5iAMH+ocNYTJj/mRXHk/lkJC2DR69at1ihKx+ny9YkZw0PF2bujNZpotUQ+I8/tHoP92x5YRSbQfpdjiKY9YiJ2qT3AesANBV8/vdY6KP2j/wBvxMdAoIuB3sYk9XeKnrHhmAesPRxaFcaPErKhS1pQgXlKIAHvKBPmXuXvL7xsPhSx3JZnqG8t0y9QnBSuZNOQ4xSEeToScuKsaIlJkoEpBfNav1Kz7hgIW2mZBNpmgYmE1ptONORis8kYabIRhKeyq22kJBUpQAGZjP2/aSgl0pvIUwBDuXd+Qwrzhm6ZqVAi9XdBGY04vBaJQWgoUkZY5vGSfquL0rNEfTck7dGMs9qmrUiWtghJwGAABYE50AD8YNsNmC1hCXRdStQLu4BHZq78OcM7Vs1KVMHcaGvJzHuzbB8pSlkk3kuaNu89X8o5+ojTfn4I/wAJPkr6+Rh8LWyYL3zFrC1qBSFm9uNRtMTT2NfJmhSuIcOft4RkdkKlrWkfLAUG3rxKk95Lmp8Y01ksYSA4qSCquBxcQ8Jcro6UOKRxs6kLcqJGABwxpzMLdt29aE3woMlQCg1d4sKaYZw/mFGJyzJ0+8ZfatqE5CkIQUJKL6lrDCjFLHAu5cewzVaEb0V7P2qmcpSVBKVAii1XErSSzpxOWh0h9ZLVfvJIoCMC+IBoRji4NKRgZGxFpU4Imdm6oUzdTA0yZzSpMa6zSZiUJZDqe8oJYV0DU4U0gW/AI2+xyiym4QpQUohnuVY6Au0CyghK6IAU/apUhNDSmEUm3rJKATR7zvTgqm7ziyzykrurP0E0BCgaMH41gN26Q9VtjCVMdiE43nOBBzpzj2fartSzDJ6wtnWsIUaEOgG6NB/uGB7oCt9vlUTeUVqZk0Z+POG5aEottdqWspXLTdQl7wd75IoAGoxzeK7LLUoqWe1mCXxwDwLsdaEXpKVlSwL7LoCH+ks3aLY4vD1MoO4AwBIp4tnBj8nfgHlr8274Os05i/XiIrmJSAMXPusVoLRojKyclQp2/s8S1BaBuLw/dVmn0/EJyscPD8RuVSkzEKlrwVgdFDA9Y+fTpy0LUhctikkFmOGYwpEMuOna6NWGfJU+wm+NB4iOI0p3x4hQI7PUN9okEDG7GcsdXXyj2PLqdPKPY4IpUuK7r1MEol3naKVKyf7xUAXsqxGdNRLGKjU5hOKj3AGN9algMlIZKQEpGgFBCP4MsrJmTjj2Ed9Vnpd8YZ2tbAxeCqNmbI+Uq+BBtDaIvqQKKDM4cKOLBs8IXWu2qUmqChqqURdAAbI1Kq0GcFIQFrdt53TzfDplELcErTS9WhBVuOGqxqwNaaR5cpqc22ehCPGKSAbDbkkKF0h1OoEZOnEcsobonAJQ7XSCDjViCO+sJrRJUlIKSA6mdm3Tri4idhmrBZRcB6Yh8OkK3e/BVRQ3QkHepmWxoMX6wPakUIBN0tXLhTrF9gCQlSjeASQ2GNc4BtM1wGO7xy1hadJo5vbT6CtiXEErX2hiXcM+NNIeWfa8tS2Cr5CL9AQ6auQ+PWMTY9qMsg0DhjnU6axo1Ey2Wh3NApSakFiX4OMtBGqGSUfuMkscZ/aGS7WmalagC6DQmuIoQMmhRa1iYgy1LWkI7LAFJaqbwxLcNIhbNvzAlSVy0vgVJLHL6TV+MK7btQqQSkNUOM3pTjFFJPoy5YSj2hlsuyXEhVSStmDi8Gpjrry0jWWVAFd4FsCXboSIw1t2iAiWkOCUuBQHJhWghlsfaXzCoFCgAzLY1TneIAIVwENHQuukaa07qkKSkXlLAJSbpIYuVBt6nf0ggJ3EkOjEEPWmHDjCgWW6pKgoqQFAsS4GTgmoxwg+daQTdJAOLZ0avQiGT+TmjNfF9rFwLCilaVLTdyVcvF6MfofGFnw1KVaCkhAuii3JU9XxycigMU/E1qSqZcRTfdRILNql8/XnD/4dsiESx8paQSzkVAUFHEOCM/VhHUmSdchnbbMEFKwkAAHeNGvtuqzZ/KLJFpUkJcXiosAkbtS2fDyizaBWSA4FKkAmrVYHDFxyi/5H+WLxN4ClKmlHAjn20iq6JpSXS4oXD6Ky5YRYtNBRjFEq1XEuogAUVoFP4YxfMmAsavhwrDwkkCSs6UYU/FllG5O13F8/pJ7nHSG6RWLJ8gTJa0Ft4Uf9QqPGLzXKNCQfGVmERNGvn+ImJg18vWIg17KQdCoBiOAeLkv+h+TNHns3lfzBr4H0jovZX/bHh6R0cEFkWC5W/wD0kfeK07MD9sa4fmDmwp5GLJEsKWEu94tniSB94dN2LZpbDZxLkIRwvHmqsKdpWrFIBc+TVMP7YWfQU6RhbdanmC6WJ4UDHLuinqpOEUkS9NFTk2zlWoJQ4VvvgGZhiDx4x7YbQlIJKCo4nRjAO05gBF5LU3iH3mNCRkcu6F8zaBS6d5AagOJGPSPMWNvo9FuK7G22rUkJAdlKDtkKYNAdnnU4ihhdLQpV6ZMIQDgo1xcYPwgaTaruJfTQxX6OqQiypbfRrrXNTcQEJvKNTi94sHDGArSJhAZLkjUYtiTlAFltRXSqWFM4aWOzqcpKryaAE0Yaka5QvT9yC2pR9r/cD2ZZKkrDLwGdRgScw0OJtoWhyS6iwBLHeIYB8hwgm2S0XCoMCOGOjZGkZsbQXeFB36vRqNDzW7X+SUJNJxl+zoY2t1ovFAvBkli+JLEaA4aCE1uAQReQsMXYoWK0wpWpFHjR2BBKSVJSSQSk8RiQRgQ48I61DcCAd1YVedIoUkHk74HGkUwTTlTWxPUQajab0Idh2Lf+apxUkFQcipxqWw1yblppu2rkxEoKYKS6lFLqZwyg3toW2DZ4mzEhK76AiqUGgWBn0ArqeJjR27YUlYCipUteagQaFgxozU4Yxem22jHbUUnQZY5xW94Ku0KSoAPXIY5PUQltikotIClb3zBdUwO6ut1XDeZ+JgsrUgEXyvR2D6AXQA3jWEG3JSwSu4qoAcnAjzDAdILehJXVlvxRs5CVpXeQl0FJS+89XpiQ2bFozOxdoKlTFXE3ipk7z1TeLUzfweD9r21c8S79VpBdsyTTwAJ5xRI2eSpJCAVAiilEAg5uDkWJ5Qbvok37jd2VKghQIa890Gt0sWf0gGwWtctAXOUVLUai9QGrBKdIKsKBRKlgAjdQDiAAN08KGmFI82pYJSxexUkgPeN1AoSTVhT7Qr6Lu/Az2XafmIJZg7HjQPiNYLXJ3gqrBjTA8xCnZVtQpH+XeUgEIFGGNT451hheKCVBRUAk7uG8OcNFnUwycB34tHso1hPsszCpSlrCwrsi6xFTRxQj28OECNMHaJSVMyW2rOUT1gAsS43i28HwNMX6QKFZE9SCPI+UOPipAC0LP1JIxbsn8wolrHuv3jHljUmbccrijrvL+n/hHsesNR0HrHRMc8MumIPf6wXsqWfny3eqs+FdeEA1OBB51gzYD/tKHDdrDDsmKQ+9Cz+1mit5oY+c7RX8qaVLBul6jLuOUfR7YKGMT8S2cFIPH1jR6hRcXZD07fJJGft21ZS0oClZl8d0UNe94Et20ZZuhJvAYuS5rwiudYBEJOzQD0jFFY1u2bpKb0DJK5qgK3RgCSWjUWfYoTLvrBYpVcyqCAH4GsUGQhBTcL0q0OrVtGWqWlCQUsQ6cqYtoY55E031XQyg9fnsVbKkBLjiekMF2hUtTpAILgj0Pf4QhNrWhTpIKScCMO8NBaJ65hYG643hiCBiaxGny5S2FrTUdBNq2yuZLDIUGyx5ZCKit0B0Oo54Mci33hkm66SqgZjziQ2deLpVu5k06axN5N2kN9JONN/9A0W9V5gklKaFqEOMWGIp4QWjaCkJcoBQSwKlOVHO4kMQwxckVi4bOQlRUSlRwYkHvI4sMYnPshXdWFXSlJCbrFKQcxSndDxnBe5adURcZ7Tdq9CSZark/wCZLFaEpO6XGrasDgIa2fb01ZQRJSkkm+MUqGopSKDsiWk3bzrId8d4+b0jrBIWpS5ZUzbtQ5ckOOg6GLwyOT0TnihGLdbGC0sULIWd28lCGYEBmKmbF8Tq0EyJgCWWb4UXIJKhQYAnINF8myfKloSVOU3seJJ8HiMtTKBSgm6O2oPzujU6iLdMyJWKU7JKVrUzpu3keLjy6xKWiYXN1CRkSC5LDHKGiV3pm9fehIwQkaORXB4MnWAKQAoYryD0BPTnBr4O4xvaM1b9kqWZQ+aETE1IvEkVABSWorAesa2UvcDoKaqBf6iAQSac+4RTKlS1FSwgFaTcKyAXIZxywgu1KIfOgahNeDawFrYa2UWeWEy0olIugBF0YMMTrgecEIsjLWtR3VpDjizU0imemZcSJZSFlnK8Uua0zbSPLXNAQSpVHYHUuG8YZa7O/QjYFMu4EkJSl3POg40hsgQBYLSlTjMDHJnLV7oYoEaMfRKXYl+LEbiDosjqD6RmQXwA8B9njVfFif8AJTR98eRjLSX/AE+P4EZ869xqwv2k7vu8r0jolcOvjHREqQKkHFLHp6QXsSlplscXp3Qt/aNCnr+Yns+bdny1MAy0u2hUHh4akmCe4s3NpTQxitpLFy6tQUq8SoJowc0FMqCN1aE4xiPiawXCVjsk14K/MV9U5KOv3I+lUXPf7CEmWu+EsgoZiVFlAu4q+9TEMKxTIs6lC8zJJpWvCJoQQXYVHTmNTXwiMtar9b2HIZNzDExilTjao2cmpJbd/wBhrKsiLrVwerO/dCZU6qwoFRvVJ5kE84eypwEtQWAbrlKXqVKz44QmlISuYtJoXo1Q7YUrwhIJvfj/AGUnJJ8fLKJ6XDhwkZE58NIERMIN28QTi2JD5PhDedtIy0EBRFXugkNqTkRFCLahbFaAQKk3ADiGBoxB1NYqratokpR+xPaG9hlXUX1TSo3WS9QADgNTxhebela+2eAGNMH74rtluFVBqnAceGkDpCQXoCccHiKjduS76KJu0k+uwtU4pwq1SBBkq1rWVFVG7XseUAIWLqmD08YlZ7Qwdg7EmuJw8vKOUIyi0+zpzkpKuvJC17VCVG6DfAIDanz1jRfCFsQpCwwXNdypmd3cOQHZvGMRtCcUTSWxamB5OQaFjG3lWFSlX2AdqUcnDVhRo144KEVSMGaUpS2+jUXRcUSWUEGqhUPSKlKIYi6Qc72YyAzz6RCzWVRJKyFFqJBwArAlollN5SUBJWbpzu0N40zLJ6CKWTDbMu+o3VpdJF4EVS4oHGDu9YsW6LyiCSz3X6sRnSEfwZIUhCr5UVKW6gp3cAAFzjg7w8mqlh+2TUh6443fGkBvVhQttG2VBKV0TeO6H6kk5Nwziyx7TWRRIWM2OKdefGF22dlmYsKQL4IANWauNcAxHSGSLHcS6BUNQHDXgaQi5WG1bVBskX7oAWzKcnEFwU11xwge0ylBCw126BcdiyjQK8sYjP2gpCXRvqdg5oNXDhtMqmGd10KJSzhzq4wPc0UVNit+BZsqxrTNC1FyqXdUQCAbqnD1x3jX0jRIEU2eXQQSkRpgqRJmf+MltJQHZ5nP6VRlZSw3a6f/AGEaD45U4lJf9SvIfcxn7Nd+p+nqYz537jXhXtJsNT4R7BDS/wBR8I6IlBeRwSYoWGLhIfIvFirUc0KHcDFK7Umrt0P2hkmFn06RMC0IWMFJB6iEO1Fi4tKgCAe6hGPGsX/B9uEyz3Qay1FPcajHm3dEtuSBdWG7QfvH9otntwTM2KozoxtoKGo1CBxiITA8wEHWvr1iImkCmBjx2mexGkMVLkoQFLUm85oSQcKXWx7yIUSUjtJBAvHEuXxcl9IotiFLKUs9QzHP8wRLCrigcWapfDiMY0UljVdmS5SzfhA1uSkqdyU0wbg4rkPFoguaATfXumlGvAGpbUd+ffAVnMw0FccQcsYLmWAEbxfBnwc4d8W5cai3/QH0425Jb/IImYjN8MXdjqls+ccq1IKmQ4P6lVUT3UHWCbPYkqoAknQvieUeWrYy0kOgo/eFU9RhDrJHqyOTFW9uyyTaFAEJYuMWbHWuMU/tCnLo6H8UipdlKXZThIBPLWrYRElZwCiHyFCOBwgUrsKlpwdtlloRfAJqtw2aQHDcy+cab4UtN1LLW63ICSEgoA7RNA5J+3GMilak7wd82GFX98o0uw9qqdawhLbrXg5KiN7e0pxNRDq15JSkmrqjcSpgV2CCyrqqMah8c8ouuXSaJKcSKu+uYjJ7O2yUhbpdyVFQYBIbBsctIbbNn/O3krZWYBd8WB0wgcrquxY0HK2gd0BJ3iQ4AYB6ZnJol81agoAMQHSaEE5OC2MDWCYCtYWwAVuFxvJrkagijwYhDndIcPxBHfjAtvyNr4PP2kJCEKF6YqhIDJBIct4tyiKb94FSgiWFUcteACrxJbB2zyiSXBStia1AyCsD3R1pnXlllBkpbDDMvDr8ig+0ZYmDcmKAGDAnJ3FRi/lDCzWopShKzfBGJG8eYAYDAQon2hbIupRVQUWLXwDRgxZ+9vGDbLIWpd9WOQGA4CGirdoVpIeWVZUHIA5QQBEZKGAESWsJBUcAHPdGqKJMwHxjar1pKQSyEgU1NT4EQslL4+beUUWuf82YtbDeUTirB6U5NF0lGrf1D7xhyO5Nm2CqKQRf/eHQekeRG6n3ejomUOUV5KT3hvKKFoWcknvH3i1QHf09Yomd/nDoDG3wlazLn3VBkTBd/wDIdn7jvjYbYlkoUw3gHBj5gtZSQQoAguMmIj6fsTaCbRISujsywMlDGNCXODiZ5+yakfMbRN3i/QxV83xjRfFXwqq982WSSMs2OXGMzbZkuX2lGmQB8sowSwSVa2b4eojKy6/iQSMQ+FDFVptN1IrXIamE87a5I3JZ5qP2EFbMlGYkzFKdSRw3deAhv4dx3JgeZb4oMsswITfURTI649IptFpK6uN7ep5tC6bNd3WSCXCbr9eEMdn2BSiNwhKQwfPDCGljjFOTeyEc85TUUtfkL2VLurIIxGeLejxo7JbKKC95gWHHIwhtCFS1Ba0l+4Frpo2WUTROKioF0lqscx7EZckW6kaYzTk4sZ2meF5AsdMIGoceFYpROvJvHIs5zYZcHhGu1Fa8SATkN3Bn96iBDDKV76FnmhCtdhO0rCj6XBDEh2BwY8/WApFtUGQhL7zqBLOaAcsBDO0IJZ6npCuRLWpSykApBU7OS+QIx1jVgbapsl6ikro1mydnoQy1JAUaln3QasS/oIaosUtCSpBJFSN58a4ivnGa2faFq3EBkUvqd1GgQFjQMz8o1Wz1FGW6SBRtKN3iK1vZlTXaCTaUJAW0u8d1JIAJ4DMl8oJN8LvneYGmA5avE0WpCjduEKGbA498UrK0qYAkY8AzeMF/qci+ZbKC6hR/UCMB78oqRMCqpN4KwSSwGpIzETMpkXVkgqfsmtXcvjC6ahYC7xZKt28AxSCcHFAOMNbBpAU/bAVPRLRccLuqUsEAABywow4viMI2NhSlQvJIUMHBcUxhTZPh6WaqF6jOakglzXSNBZrOlCQlIYAUAi2OLXZKTLUiM78c7Q+XZigHfmbo1b6vDzEaQ0j5N8VbW+faFEF0IdCe7tHvPkIecuMQwjykLZSTjSCUkgVAryiMojOnT0i5KAcm1ofsaRiZtRT8zgnpHQZ8pPHofWOgWMMDKTr5wOuQj3/eJGYcL/h+Y8V/F4RyFA58hPH3zhj8L7TTZpt1VETCAqtAclfY/iAFp/e8DAc5sLxPcYeEnF2hZx5KmfXpksKDYgxl9o7KQqpQCDqGPe9Yh8F7fCwLPMVvpG4o/UkZcx7zjVzZQIrGxVJWZHcXRgBsSUxFwMX8YRW74dXLUVSqhVGxfgeOkfRLZs8iqBmKYUevg8Dqs2IIpmInPHapFIZXF2z5VMQoYpSGpRwekafY815ZT9WKMYa7Y2QlSSpThvrAvKbRQfe4HGEuzw1w4YR5+aLqmjdjafuTK9q2f5iL5AoWXwOfLLTGM/Z5olEgKAGQJaNxbLK++hQYneGPXQ+kZ+dYUm8ClJ7vIqxhITSVSWgyxOUuUXTKpVtQtBSVAGrVpV+OMKFqIJC3Tj7Bj3bOyd28wDVIGkX7L2chJQpTLChQmraxohwinKPnwZ8uKUmoy8eSr/q4SGfeus7cc+PCNHsaVKXLSslT3SVAfU1CrdxOPWB5VlQsvcTdyy7+UDWix3JiVIvJSQQWJpgWFaYeMCGWFtVQMsJRjbdmx2bY0XbyEF7pa8GPLgIaWSzqQN9KAo0ACi55uIVi1oYICylSmACjWgBKUnNR5vBMmyJTvFQlml68sDuIJ8Yr50iKVIb2dAvXSXUA5A7IfB+MVTJyEK3gqpu3gCoCgAvNh3wuTKO8lB3SQRdPazDnKuQ0i+0oWlBbfUcQSa6k8IN/gJf8m9fNWZg7hykUujKCtm2YqQkLRVquSXGpimy2da1hTlKWG6ahxidc8tI0EqXdDZ5mKwgTlIilDYRYBHrQs2/tlFmlKmLOHZGalZARoJiT49298iV8pCmmTKYh0pzV9hx5R80s+QveMV2zaK58xU1Z3lHBxQZAVwEEWdL5v74RlyStmvHHigxCcrx6v9oMlSaVJ9/+MDy0Uw8D6QUhQbLx9IgyyJXE6q6D/jHseXhw8fSPYUITe9tEFcm7osMs/vdIgZX8fvvjhSmYk6noYCnA6q6fiGCpPFfjA82Vz8fWGTOFiipJBSSCKg4EEYGPovwp8TJtCbkxkzUjkFgZp9IwM6STg/l94BXLUhQUglKgXBCqgiLQnxJTipH3BSIpXIEZX4V+M0zGlWghEzBKvpX6K4dOG0aNKaatGZpp0xZNsoIwjHbQ2b8lbAbii6eBzH36x9CKIT7dsN9BaihVPPTvwiWWCcb8lMU3GRkkLDKISxbVtKjwOWcQWlCUOo3ydOtdBjANotRlm8U1e6XGBD5as8LVW9azUsDRIGIGTx5ji3dI9OMkqth9oAIGFatwwhDNtCZc75dbrAgZBwXD90MrMgihw/u/nEpOyBPmIBQTdB3qgXasD+85HjFsWNXXySzZHSa+QqzKdIi4IK2SlJUdAKw92b8JoSGUtZGmFNHaNHZNmIQm6hIA8e84mGh6Vt70Tn6iKWtmSsWxVg31pKlu4c1HF3oYIny0o37QaOHKiMsP7CNcmyR6qwJPaAPMPGv6KrRkeRtmcs6zOT/kgoQR21JKVF80g4BmqYa2PZlQVFSizOTlyFIbS7MkZRcEw8YJCOTIS5YThE2j2EnxJ8TSbGi8tTrPZQO0o8B98IoKGbX2pLs0tUyaoJSB3k5ADMnSPivxBtuZbZt9bpQH+WjJI1LYqP450bb21Otsy/MUyR2EA7qR0qePlEbPZ/3h4ekRnPwi0IVtk7PZuB990NJNnHv/APMVSZI/Un+n0g5CeI/m/EZZM0pFiJLB/sf+MWIlanwI/wBsREsZjxj1hw6iFYyLflHUf1ekdFTDh/N+I6FCEqGpPefzECAM/fdCo2rRR/mPrEVTifqP8x9YfixRupPPr6mK1y/ZI9YV/Ob6j/MR94gZx/Ur+Yn7weJwxXZ/dIAnWY5D30ilUw6nqfWB1qOp6mCosDK7TZzpGj+HvjSbZmRNeZL776RwJ7Q51jLz0HU9fzAsx9fGKxbXROUU+z77srbEm0pvSlhWowUOBBqDBdolkg3WfjhH5zkTpktYWhZQofUksfyOBjZ7F/xNny2TaECakfUndX0NCekX5KSpmdxado0nxPsMqBWlO+WcA0LZ1zjL2bY856Slv3AdzmN1sz44sFoYfMCFH6V7pfQPj3PGikoQqqFJPIiIv08W7sos8oqqPnlg+FZymvkIH8x9PONjsvY6ZSQA51JxMORKbKPbkWjjjHpE5ZJS7ZQiU0WBEWXY9CIahLKwmPQI9WQMSBzLQm2r8V2Oz/6k9AP6QXV0FfCCcOYrtNoRLSVrUEJAcklqR8w25/i0KpssonRa6DmE4nvaPnu1tu2i1KvTpilVcJwSOSRTvLmA3QVGz6V8T/4mJDosgvnD5ihuj+EYq8uJwj5zNWuasrmLUtasVKx/A4CkCSRxhlZ1N9R6xKUmVhFBFms7f2hnIle2f/dActaslHr+IJlzlj6j4xnlbNCQeiSdR/IX84IQls+ohcmavNRj0z1/rPvuhKGGoQMXHQ+sesn9QHMK9YVJtK9aa0/MSTPXeG+W7vSOo6xpdl6p6GPYB+av/uHw9I6BRwLcScn6RAy0/p74IKKdjwiKUD9MNYxR8tOkREtOhEXLlp/SREflpg2LRStCdDFa5adfH8wQZCDmYj8kgdqDZwvmygcCYpXZjqO+DlyzqOnrFa0EB3TDpitC9dmIxihVmVpDdcskMWis2b+HpBUhHERzLOdIlZ7XOlf6cyYjglRSOgLQ1XZjwPvjAy7KdIdTFcAqzfG+0EYWlRGikpP2fxg9H+J20B9cs80H7KhEbNqIpXZYZTEeM0iv8UNofqljkhX/ADgK0f4g7QV/693+FCf9wMJhZBrExZBrB5g+mRte27TN7c+YrhfIHQMICRL4QzFkHDwi9Fk9v+IVzGUBdKswP9oPs9iTBKbP+75RahDZeETlNsoopHsqxpGnR/KL/wBkGX3irD+0TC+MJbGpHGz6R6ZSw7E9Y9Cxr4x6FcYFsakRTf5+EWJmap8ImmaciIl87VKT3fiBZxH5yM3iyQsOLvHFo8K0n6Uj3zjpAF4MB3OMjHHBd5XDpHR5f4nqY6AELnZwGnAx0dAXQwWrDpAq46OjhShcBzc48jodHHZR1o7PTzjo6D5OfREdmJnKPI6OAQVHhjo6OAdLw6xVNyjo6CuwHqIrjo6D5AQXiIsTHR0ccXWeDB6R0dCsYpMSOHdHsdACUq+/2jxeBjo6CA7Xn9ovlR0dA8HEBjBErtDlHkdAYUEx0dHQBj//2Q==" }}/>
              <View style={styles.row}>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
              </TouchableOpacity>
              <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
              </TouchableOpacity>
            </View>
            
            <View style = {styles.linePost}/>
          </View>

          
  {/* end */}

    {/* 3 post */}

    <View style={styles.postEach}>          
            <Image style={styles.userPhoto} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzDV9oMHp7mVm2XIKVfgIoVBUrIcNnBgzgw&usqp=CAU" }}/>
            <Text style={styles.userName}>ThomasSmith</Text>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text>Majestic Café</Text>
            </View>

              <Image style={styles.userPost} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMiVHaCJ6f_Nd1HU0_VDPews2WNgZ02_EPw&usqp=CAU" }}/>
              <View style={styles.row}>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
              </TouchableOpacity>
              <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
              </TouchableOpacity>
            </View>
            
            
            <View style = {styles.linePost} />
          </View>

          
  {/* end */}

    {/* 4 post */}

    <View style={styles.postEach}>   
    <TouchableOpacity
        onPress={() => props.navigation.navigate('Profile2')}>        
            <Image style={styles.userPhoto} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoQFvYAr4KD4S-iecBnmLmPf7zuyFyHkd8w&usqp=CAU" }}/>
            </TouchableOpacity>
            <Text style={styles.userName}>LauraJones</Text>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text>IKEDA</Text>
            </View>
            <TouchableOpacity
        onPress={() => props.navigation.navigate('Comment')}>    
              <Image style={styles.userPost} source={{ uri:"data:image/jpeg;base64,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" }}/>
              </TouchableOpacity>
              <View style={styles.row}>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
              </TouchableOpacity>
              <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
              </TouchableOpacity>
            </View>
            
            
            <View style = {styles.linePost} />  
          </View>

          
  {/* end */}

    {/* 5 post */}

    <View style={styles.postEach}>          
            <Image style={styles.userPhoto} source={{ uri:"https://d1r8m46oob3o9u.cloudfront.net/images/home-page-examples/02.jpg" }}/>
            <Text style={styles.userName}>SimonWaterson</Text>

            <View style={styles.row}>
              <Image style={styles.smallIcons} source={require('../../assets/images/marker.png')}/>
              <Text>Mamma Mia!</Text>
            </View>

              <Image style={styles.userPost} source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2JiGfqy2AoqQmYRz8iuQ6EzziD15_U7fzw&usqp=CAU" }}/>
              <View style={styles.row}>
              <TouchableOpacity>
                <Image style={styles.bigIcons} source={require('../../assets/images/heart.png')} />
              </TouchableOpacity>
              <Text style={{color:'#FBEE9C', fontSize: 20, fontWeight: 'bold',}}>  |  </Text>
              <TouchableOpacity >
                <Image style={styles.bigIcons} source={require('../../assets/images/paper-plane.png')} />
              </TouchableOpacity>
            </View>
            
            
            <View style = {styles.linePost} />  
          </View>

          
  {/* end */}

      <View style={styles.nav}>
        <TouchableOpacity 
          style={styles.navButton2} 
          onPress={() => props.navigation.navigate('OfferScreen')}>
            <Image style={styles.navIcons} source={require('../../assets/images/badge-percent.png')} />
        </TouchableOpacity>   
        <TouchableOpacity 
          style={styles.navButton3}
          onPress={() => props.navigation.navigate('Map')}>
            <Image style={styles.navIcons} source={require('../../assets/images/map-marker.png')} />
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.navButton4}
          onPress={() => props.navigation.navigate('Profile')}>
            <Image style={styles.navIcons} source={require('../../assets/images/user.png')} />
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.navButton5}
          onPress={() => props.navigation.navigate('InviteScreen')}>
            <Image style={styles.navIcons} source={require('../../assets/images/envelope-plus.png')} />
        </TouchableOpacity> 
        <TouchableOpacity 
          style={styles.navButton1}
          onPress={() => props.navigation.navigate('HomeScreen')}>
            <Image style={styles.home} source={require('../../assets/images/homeWHITE.png')} />
        </TouchableOpacity> 
        </View>


        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#F8F8FF'
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', //Here is the trick
    bottom: -20, //Here is the trick
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
    
  },
  logo: {
    resizeMode: "cover",
    top: 30,
    height: 55,
    width: 55,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#EB5F55',
    top:30,
    alignSelf: 'stretch'
},
  linePost:{
    borderWidth: 1,
    width: 250,
    borderColor:'#D3EAE8',
    top: 15,
    alignSelf: 'center',
},
  userPhoto:{
  height: 80,
  width: 80,
  borderRadius: 40,
  borderWidth: 4,
  borderColor: '#D3EAE8',
},
  userPost:{
  top: 20,
  height: 260,
  width: 260,
  borderRadius: 130,
  marginBottom: 30,
},
  smallIcons:{
  width:15,
  height: 15,
},
  bigIcons:{
  width: 30,
  height: 30,
},
  userName:{
    fontSize:20,
    color: '#EB5F55',
    fontWeight: 'bold',
},
  row:{
    flexDirection: "row",
    flexWrap: "wrap",
},
home:{
  width: 40,
  height: 40,
},
navIcons:{
  width: 25,
  height: 25,
},
navButton2:{
  justiftyContent:"center", 
  alignItems:"center",
  left:-150,
  bottom:-160,
  height: 40,
  width:100,
  paddingTop:7,
  paddingLeft:0,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton3:{
  justiftyContent:"center", 
  alignItems:"center",
  left:-50,
  bottom:-120,
  height: 40,
  width:100,
  paddingTop:7,
  paddingRight:15,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton1:{
  justiftyContent:"center", 
  alignItems:"center",
  height: 60,
  width:60,
  bottom:20,
  paddingTop:5,
  paddingRight:3,
  backgroundColor:'#EB5F55',
  borderRadius:30,
  borderWidth: 3,
  borderColor: '#EB5F55'
},
navButton5:{
  justiftyContent:"center", 
  alignItems:"center",
  right:-50,
  bottom:-40,
  height: 40,
  width:100,
  paddingTop:7,
  paddingLeft:15,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
navButton4:{
  justiftyContent:"center", 
  alignItems:"center",
  right:-150,
  bottom:-80,
  height: 40,
  width:100,
  paddingTop:7,
  paddingRight:0,
  backgroundColor:'#F8F8FF',
  borderWidth: 1,
  borderColor: '#EB5F55',
},
postEach: {
  backgroundColor: '#F8F8FF',
  justiftyContent:"center", 
  alignItems:"center",
  marginTop: 40, 
  width: '100%',
  flexDirection: "column",
},
});

export default HomeScreen;