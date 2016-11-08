/**
 * Action 生成辅助器
 * author MatthewFang-pc
 * date   2016/10/17
 * description
 */
export default function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}

