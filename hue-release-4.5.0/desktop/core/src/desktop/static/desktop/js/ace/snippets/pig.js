ace.define("ace/snippets/pig",["require","exports","module"],function(e,t,n){"use strict";t.snippetText="snippet loadpigstorage\n	A = LOAD '${1:what}' USING PigStorage() AS (\n		${2:var_name}:${3:var_type}\n	);\nsnippet loadhcat\n	A = LOAD '${1:table}' USING org.apache.hcatalog.pig.HCatLoader();\nsnippet loadhbase\n	A = LOAD 'hbase://${1:table}' USING org.apache.pig.backend.hadoop.hbase.HBaseStorage('${2:columnlist}');\n",t.scope="pig"})