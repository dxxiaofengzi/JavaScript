// 调用函数-1.alert-表示警示弹出框
function context(){
    
    alert('调用函数');
}
// 调用函数-confirm 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。
function confirms(){
    var message = confirm("你愿意嫁给我吗?");
    if (message == true){
        document.write("老婆，你好欢迎你来到我的世界！！！");
    }else{
        document.write("没关系，我还会回来的！！！");
    }
}
//调用函数-prompt弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）
function prompts(){
    var score;
    score = prompt("请输入你的成绩，我们即将根据你的成绩划分等级:");
    if (score >= 80){
        document.write("等级为优秀");
    }else if(score >= 60){
        document.write("等级为及格");
    }else if(score == ""){
        document.write("未写明分数，无法获取等级")
    }else{
        document.write("等级为不及格，需要重修")
    }
}