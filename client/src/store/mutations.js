//mutations实现同步，actions实现异步

export const setIsAuthenticated = (state,data) => { 
    state.isAuthenticated = data;
};
//data为你注册的信息 即res.data 传进state中   即 res.data -> state的过程
export const setUser = (state,data) => {
    state.user = data;
    // console.log(state.user);
};
export const setProfile = (state,data) => {
    state.profile = data;
    // console.log(state.user);
};
export const setLoading = (state,data) => {
    state.loading = data;
    // console.log(state.user);
};
export const setProfiles = (state,data) => {
    state.profiles = data;
    // console.log(state.user);
};