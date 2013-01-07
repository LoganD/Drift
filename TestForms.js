<HTML>
<HEAD>
<TITLE>Simple Adder</TITLE>
<SCRIPT LANGUAGE="JavaScript">

function CalculateSum(Atext, Btext, form)
{
	var A = parseFloat(Atext);
	var B = parseFloat(Btext);
	form.Answer.value = A + B;
}

function ClearForm(form)
{
	form.input_A.value = "";
	form.input_B.value = "";
	form.Answer.value = "";
}

</SCRIPT>
</HEAD>

<BODY>

<P><FONT SIZE="+2">Simple Adder</FONT></P>

<FORM NAME="Calculator" METHOD="post">
	<P>Enter a number: <INPUT TYPE=TEXT NAME="input_A" SIZE=10></P>
	<P>Enter a number: <INPUT TYPE=TEXT NAME="input_B" SIZE=10></P>
	<P><INPUT TYPE="button" VALUE="Add Numbers" name="AddButton" onClick="CalculateSum(this.form.input_A.value, 	this.form.input_B.value, this.form)"></P>
	<P><INPUT TYPE="button" VALUE="Clear Fields" name="ClearButton" onClick="ClearForm(this.form)"></P>
	<P>Answer = <INPUT TYPE=TEXT NAME="Answer" SIZE=12></P>
</FORM>

</BODY>
</HTML>