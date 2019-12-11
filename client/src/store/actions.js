//mutations实现同步，actions实现异步

export const setIsAuthenticated = ({commit},data) => { 
    commit("setIsAuthenticated",data); //这里的"方法名"必须与mutations中一致
};

export const setUser = ({commit},data) => {
    commit("setUser",data);
};

export const setProfile = ({commit},data) => {
    commit("setProfile",data);
};
export const setLoading = ({commit},data) => {
    commit("setLoading",data);
};
export const setProfiles = ({commit},data) => {
    commit("setProfiles",data);
};

//清除state的内容
export const clearCurrentState = ({commit},data) => {
    commit('setProfile',null);
    commit('setUser',null);
    commit('setIsAuthenticated',false);
};