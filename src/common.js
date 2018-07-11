export function GetQueryString(name) {
    let arr = window.location.href.split('?');
    if (arr.length == 1) {
      return null;
    }
    let obj = arr[1].split('&');
    let data = {};
    for (let i = 0; i < obj.length; i++) {
      let ar = obj[i].split('=');
      data[ar[0]] = ar[1];
    }
    return data[name]
  }
  export function stateAdmin(){
  var state={};
  localStorage.getItem('vueStateAmin')&&(state=JSON.parse(localStorage.getItem('vueStateAmin')))
  console.log(state,typeof state,3131231)
  function setLocalStroge(){
    localStorage.setItem("vueStateAmin",JSON.stringify(state))
  }
  return {
    get(name){
      return state[name]
    },
    set(name,data){
      state[name]=data;
      setLocalStroge();
    },

  }
}
export function isWeixinBrowser() {
  var agent = navigator.userAgent.toLowerCase();
  if (agent.match(/MicroMessenger/i) == "micromessenger") {
      return true;
  } else {
      return false;
  }
}

// localStorageState.set('name',[1,1,1,1,1]);
// console.log(localStorageState.get('name'),'mahuan')