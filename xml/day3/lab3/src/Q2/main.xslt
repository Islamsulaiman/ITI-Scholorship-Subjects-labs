<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    
    
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    
<html> 
    
<body>
    
  <h2 style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">CD's of the century</h2>
  
  <table border="solid 1px black">
      
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    
    <xsl:for-each select="catalog/cd">
        
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="artist"/></td>
    </tr>
    
    </xsl:for-each>
    
  </table>
  
</body>

</html>

</xsl:template>
</xsl:stylesheet>   








<!--<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    
<html> 
    
<body>
    
  <h2 style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">CD's of the century</h2>
  
  <table border="solid 1px black">
      
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    
    <xsl:for-each select="catalog/cd">
        
    <tr bgcolor="#9acd32">
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="price"/></td>
    </tr>
    
    </xsl:for-each>
    
  </table>
  
</body>

</html>

</xsl:template>
</xsl:stylesheet>   
    -->
    
    
    
    
    
    
    
    
    
    
    
<!--<xsl:template match="/catalog">
    
<html> 
    
<body>
    
  <h2 style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">Food menue</h2>
  
  <table border="1px" >
      
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Title</th>
      <th style="text-align:left">Artist</th>
    </tr>
    
    <xsl:for-each select="breakfast_menu/food">
        
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="description"/></td>
      <td><xsl:value-of select="calories"/></td>
    </tr>
    
    </xsl:for-each>
    
  </table>
  
</body>

</html>

</xsl:template>
</xsl:stylesheet>-->
