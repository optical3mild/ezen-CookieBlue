<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<script>
		var userType = <%=session.getAttribute(request.getAttribute("cookieId")+"userType")%>;
		switch (userType) {
		case 0:
			document.location.href ="AdminProc?action=intoMain";
			break;
			
		case 1:
			document.location.href ="TransProc?action=intoMain";
			break;
			
		case 2:
			document.location.href ="MallProc?action=intoMain";
			break;
		
		case 3:
			document.location.href ="SupplyProc?action=intoMain";
			break;
		
		case null:
			document.location.href = 'view/UserProc?action=cookieCheck';
			break;
		}		
	</script>
</body>
</html>