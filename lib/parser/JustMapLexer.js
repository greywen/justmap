// Generated from D:\Code\github\justmap\lib\parser\JustMapLexer.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\'\u01e8\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002w\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u009d\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00a3\n\n\u0003\n\u0007\n\u00a6\n\n\f\n\u000e\n\u00a9\u000b\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00b0\n\n\u0003\n\u0007\n",
    "\u00b3\n\n\f\n\u000e\n\u00b6\u000b\n\u0003\n\u0005\n\u00b9\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0005\r\u00c4\n\r\u0003\r\u0003\r\u0003\r\u0006\r",
    "\u00c9\n\r\r\r\u000e\r\u00ca\u0003\r\u0005\r\u00ce\n\r\u0003\r\u0005",
    "\r\u00d1\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00d7\n\r\u0003",
    "\r\u0005\r\u00da\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00df\n\u000e\f\u000e\u000e\u000e\u00e2\u000b\u000e\u0005\u000e\u00e4",
    "\n\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00e8\n\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u010c\n\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0113",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u0119\n\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0123\n\u001b",
    "\f\u001b\u000e\u001b\u0126\u000b\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u0130\n\u001c\f\u001c\u000e\u001c\u0133\u000b\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0007\u001d\u0138\n\u001d\f\u001d\u000e\u001d",
    "\u013b\u000b\u001d\u0003\u001e\u0003\u001e\u0005\u001e\u013f\n\u001e",
    "\u0003\u001e\u0003\u001e\u0007\u001e\u0143\n\u001e\f\u001e\u000e\u001e",
    "\u0146\u000b\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u014b",
    "\n\u001e\f\u001e\u000e\u001e\u014e\u000b\u001e\u0007\u001e\u0150\n\u001e",
    "\f\u001e\u000e\u001e\u0153\u000b\u001e\u0003\u001e\u0005\u001e\u0156",
    "\n\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u015a\n\u001e\u0003\u001e",
    "\u0003\u001e\u0007\u001e\u015e\n\u001e\f\u001e\u000e\u001e\u0161\u000b",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u0166\n\u001e",
    "\f\u001e\u000e\u001e\u0169\u000b\u001e\u0007\u001e\u016b\n\u001e\f\u001e",
    "\u000e\u001e\u016e\u000b\u001e\u0003\u001e\u0005\u001e\u0171\n\u001e",
    "\u0005\u001e\u0173\n\u001e\u0003\u001f\u0003\u001f\u0006\u001f\u0177",
    "\n\u001f\r\u001f\u000e\u001f\u0178\u0003\u001f\u0005\u001f\u017c\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0007 \u0182\n \f \u000e \u0185",
    "\u000b \u0003!\u0006!\u0188\n!\r!\u000e!\u0189\u0003!\u0003!\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u01ae\n\"\u0003\"\u0003\"",
    "\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003(",
    "\u0003(\u0003)\u0005)\u01db\n)\u0003)\u0006)\u01de\n)\r)\u000e)\u01df",
    "\u0003*\u0003*\u0003*\u0006*\u01e5\n*\r*\u000e*\u01e6\u0003\u0124\u0002",
    "+\u0004\u0003\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012",
    "\n\u0014\u000b\u0016\u0002\u0018\u0002\u001a\f\u001c\u0002\u001e\u0002",
    " \r\"\u000e$\u000f&\u0010(\u0011*\u0012,\u0013.\u00140\u00152\u0016",
    "4\u00176\u00188\u0019:\u001a<\u001b>\u001c@\u001dB\u001eD\u001fF H!",
    "J\"L#N$P%R&T\'\u0004\u0002\u0003\u0011\n\u0002$$11^^ddhhppttvv\u0004",
    "\u0002$$^^\n\u0002))11^^ddhhppttvv\u0004\u0002))^^\u0005\u00022;CHc",
    "h\u0003\u00022;\u0003\u00023;\u0004\u0002GGgg\u0004\u0002--//\u0004",
    "\u0002,,11\u0004\u0002\f\f\u000f\u000f\u0005\u0002C\\aac|\u0006\u0002",
    "2;C\\aac|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0007\u0002\f\f\u000f",
    "\u000f%&BB\u007f\u007f\u0002\u021b\u0002\u0004\u0003\u0002\u0002\u0002",
    "\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002\u0002",
    "\u0002\n\u0003\u0002\u0002\u0002\u0002\f\u0003\u0002\u0002\u0002\u0002",
    "\u000e\u0003\u0002\u0002\u0002\u0002\u0010\u0003\u0002\u0002\u0002\u0002",
    "\u0012\u0003\u0002\u0002\u0002\u0002\u0014\u0003\u0002\u0002\u0002\u0002",
    "\u001a\u0003\u0002\u0002\u0002\u0002 \u0003\u0002\u0002\u0002\u0002",
    "\"\u0003\u0002\u0002\u0002\u0002$\u0003\u0002\u0002\u0002\u0002&\u0003",
    "\u0002\u0002\u0002\u0002(\u0003\u0002\u0002\u0002\u0002*\u0003\u0002",
    "\u0002\u0002\u0002,\u0003\u0002\u0002\u0002\u0002.\u0003\u0002\u0002",
    "\u0002\u00020\u0003\u0002\u0002\u0002\u00022\u0003\u0002\u0002\u0002",
    "\u00024\u0003\u0002\u0002\u0002\u00026\u0003\u0002\u0002\u0002\u0002",
    "8\u0003\u0002\u0002\u0002\u0002:\u0003\u0002\u0002\u0002\u0002<\u0003",
    "\u0002\u0002\u0002\u0002>\u0003\u0002\u0002\u0002\u0002@\u0003\u0002",
    "\u0002\u0002\u0002B\u0003\u0002\u0002\u0002\u0003D\u0003\u0002\u0002",
    "\u0002\u0003F\u0003\u0002\u0002\u0002\u0003H\u0003\u0002\u0002\u0002",
    "\u0003J\u0003\u0002\u0002\u0002\u0003L\u0003\u0002\u0002\u0002\u0003",
    "N\u0003\u0002\u0002\u0002\u0003P\u0003\u0002\u0002\u0002\u0003R\u0003",
    "\u0002\u0002\u0002\u0003T\u0003\u0002\u0002\u0002\u0004v\u0003\u0002",
    "\u0002\u0002\u0006z\u0003\u0002\u0002\u0002\b\u0085\u0003\u0002\u0002",
    "\u0002\n\u0088\u0003\u0002\u0002\u0002\f\u008b\u0003\u0002\u0002\u0002",
    "\u000e\u008d\u0003\u0002\u0002\u0002\u0010\u0090\u0003\u0002\u0002\u0002",
    "\u0012\u009c\u0003\u0002\u0002\u0002\u0014\u00b8\u0003\u0002\u0002\u0002",
    "\u0016\u00ba\u0003\u0002\u0002\u0002\u0018\u00c0\u0003\u0002\u0002\u0002",
    "\u001a\u00d9\u0003\u0002\u0002\u0002\u001c\u00e3\u0003\u0002\u0002\u0002",
    "\u001e\u00e5\u0003\u0002\u0002\u0002 \u00eb\u0003\u0002\u0002\u0002",
    "\"\u00ef\u0003\u0002\u0002\u0002$\u00f2\u0003\u0002\u0002\u0002&\u00f5",
    "\u0003\u0002\u0002\u0002(\u00f7\u0003\u0002\u0002\u0002*\u00f9\u0003",
    "\u0002\u0002\u0002,\u010b\u0003\u0002\u0002\u0002.\u0112\u0003\u0002",
    "\u0002\u00020\u0118\u0003\u0002\u0002\u00022\u011a\u0003\u0002\u0002",
    "\u00024\u011c\u0003\u0002\u0002\u00026\u011e\u0003\u0002\u0002\u0002",
    "8\u012a\u0003\u0002\u0002\u0002:\u0134\u0003\u0002\u0002\u0002<\u0172",
    "\u0003\u0002\u0002\u0002>\u0174\u0003\u0002\u0002\u0002@\u017f\u0003",
    "\u0002\u0002\u0002B\u0187\u0003\u0002\u0002\u0002D\u01ad\u0003\u0002",
    "\u0002\u0002F\u01b1\u0003\u0002\u0002\u0002H\u01b7\u0003\u0002\u0002",
    "\u0002J\u01be\u0003\u0002\u0002\u0002L\u01c9\u0003\u0002\u0002\u0002",
    "N\u01d4\u0003\u0002\u0002\u0002P\u01d7\u0003\u0002\u0002\u0002R\u01dd",
    "\u0003\u0002\u0002\u0002T\u01e4\u0003\u0002\u0002\u0002VW\u0007%\u0002",
    "\u0002WX\u0007u\u0002\u0002XY\u0007s\u0002\u0002Yw\u0007n\u0002\u0002",
    "Z[\u0007%\u0002\u0002[\\\u0007u\u0002\u0002\\]\u0007g\u0002\u0002]^",
    "\u0007n\u0002\u0002^_\u0007g\u0002\u0002_`\u0007e\u0002\u0002`w\u0007",
    "v\u0002\u0002ab\u0007%\u0002\u0002bc\u0007k\u0002\u0002cd\u0007p\u0002",
    "\u0002de\u0007u\u0002\u0002ef\u0007g\u0002\u0002fg\u0007t\u0002\u0002",
    "gw\u0007v\u0002\u0002hi\u0007%\u0002\u0002ij\u0007w\u0002\u0002jk\u0007",
    "r\u0002\u0002kl\u0007f\u0002\u0002lm\u0007c\u0002\u0002mn\u0007v\u0002",
    "\u0002nw\u0007g\u0002\u0002op\u0007%\u0002\u0002pq\u0007f\u0002\u0002",
    "qr\u0007g\u0002\u0002rs\u0007n\u0002\u0002st\u0007g\u0002\u0002tu\u0007",
    "v\u0002\u0002uw\u0007g\u0002\u0002vV\u0003\u0002\u0002\u0002vZ\u0003",
    "\u0002\u0002\u0002va\u0003\u0002\u0002\u0002vh\u0003\u0002\u0002\u0002",
    "vo\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\b\u0002\u0002",
    "\u0002y\u0005\u0003\u0002\u0002\u0002z{\u0007%\u0002\u0002{|\u0007k",
    "\u0002\u0002|}\u0007p\u0002\u0002}~\u0007e\u0002\u0002~\u007f\u0007",
    "n\u0002\u0002\u007f\u0080\u0007w\u0002\u0002\u0080\u0081\u0007f\u0002",
    "\u0002\u0081\u0082\u0007g\u0002\u0002\u0082\u0083\u0003\u0002\u0002",
    "\u0002\u0083\u0084\b\u0003\u0003\u0002\u0084\u0007\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0007<\u0002\u0002\u0086\u0087\b\u0004\u0004\u0002",
    "\u0087\t\u0003\u0002\u0002\u0002\u0088\u0089\u0007}\u0002\u0002\u0089",
    "\u008a\b\u0005\u0005\u0002\u008a\u000b\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0007*\u0002\u0002\u008c\r\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0007+\u0002\u0002\u008e\u008f\b\u0007\u0006\u0002\u008f\u000f\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0007k\u0002\u0002\u0091\u0092\u0007",
    "p\u0002\u0002\u0092\u0011\u0003\u0002\u0002\u0002\u0093\u0094\u0007",
    "v\u0002\u0002\u0094\u0095\u0007t\u0002\u0002\u0095\u0096\u0007w\u0002",
    "\u0002\u0096\u009d\u0007g\u0002\u0002\u0097\u0098\u0007h\u0002\u0002",
    "\u0098\u0099\u0007c\u0002\u0002\u0099\u009a\u0007n\u0002\u0002\u009a",
    "\u009b\u0007u\u0002\u0002\u009b\u009d\u0007g\u0002\u0002\u009c\u0093",
    "\u0003\u0002\u0002\u0002\u009c\u0097\u0003\u0002\u0002\u0002\u009d\u0013",
    "\u0003\u0002\u0002\u0002\u009e\u00a7\u0007$\u0002\u0002\u009f\u00a2",
    "\u0007^\u0002\u0002\u00a0\u00a3\t\u0002\u0002\u0002\u00a1\u00a3\u0005",
    "\u0016\u000b\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a1\u0003",
    "\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a6\n",
    "\u0003\u0002\u0002\u00a5\u009f\u0003\u0002\u0002\u0002\u00a5\u00a4\u0003",
    "\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00aa\u0003",
    "\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00b9\u0007",
    "$\u0002\u0002\u00ab\u00b4\u0007)\u0002\u0002\u00ac\u00af\u0007^\u0002",
    "\u0002\u00ad\u00b0\t\u0004\u0002\u0002\u00ae\u00b0\u0005\u0016\u000b",
    "\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af\u00ae\u0003\u0002\u0002",
    "\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00b3\n\u0005\u0002",
    "\u0002\u00b2\u00ac\u0003\u0002\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b9\u0007)\u0002",
    "\u0002\u00b8\u009e\u0003\u0002\u0002\u0002\u00b8\u00ab\u0003\u0002\u0002",
    "\u0002\u00b9\u0015\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007w\u0002",
    "\u0002\u00bb\u00bc\u0005\u0018\f\u0002\u00bc\u00bd\u0005\u0018\f\u0002",
    "\u00bd\u00be\u0005\u0018\f\u0002\u00be\u00bf\u0005\u0018\f\u0002\u00bf",
    "\u0017\u0003\u0002\u0002\u0002\u00c0\u00c1\t\u0006\u0002\u0002\u00c1",
    "\u0019\u0003\u0002\u0002\u0002\u00c2\u00c4\u0007/\u0002\u0002\u00c3",
    "\u00c2\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c6\u0005\u001c\u000e\u0002\u00c6",
    "\u00c8\u00070\u0002\u0002\u00c7\u00c9\t\u0007\u0002\u0002\u00c8\u00c7",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00c8",
    "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cd",
    "\u0003\u0002\u0002\u0002\u00cc\u00ce\u0005\u001e\u000f\u0002\u00cd\u00cc",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00da",
    "\u0003\u0002\u0002\u0002\u00cf\u00d1\u0007/\u0002\u0002\u00d0\u00cf",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0003\u0002\u0002\u0002\u00d2\u00d3\u0005\u001c\u000e\u0002\u00d3\u00d4",
    "\u0005\u001e\u000f\u0002\u00d4\u00da\u0003\u0002\u0002\u0002\u00d5\u00d7",
    "\u0007/\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7",
    "\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00da",
    "\u0005\u001c\u000e\u0002\u00d9\u00c3\u0003\u0002\u0002\u0002\u00d9\u00d0",
    "\u0003\u0002\u0002\u0002\u00d9\u00d6\u0003\u0002\u0002\u0002\u00da\u001b",
    "\u0003\u0002\u0002\u0002\u00db\u00e4\u00072\u0002\u0002\u00dc\u00e0",
    "\t\b\u0002\u0002\u00dd\u00df\t\u0007\u0002\u0002\u00de\u00dd\u0003\u0002",
    "\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0\u00de\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002",
    "\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3\u00db\u0003\u0002",
    "\u0002\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002\u00e4\u001d\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\t\t\u0002\u0002\u00e6\u00e8\t\n\u0002\u0002",
    "\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\u0005\u001c\u000e\u0002",
    "\u00ea\u001f\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007x\u0002\u0002",
    "\u00ec\u00ed\u0007c\u0002\u0002\u00ed\u00ee\u0007t\u0002\u0002\u00ee",
    "!\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007-\u0002\u0002\u00f0\u00f1",
    "\u0007-\u0002\u0002\u00f1#\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007",
    "/\u0002\u0002\u00f3\u00f4\u0007/\u0002\u0002\u00f4%\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\t\u000b\u0002\u0002\u00f6\'\u0003\u0002\u0002\u0002",
    "\u00f7\u00f8\t\n\u0002\u0002\u00f8)\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\u0007?\u0002\u0002\u00fa+\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007",
    "?\u0002\u0002\u00fc\u010c\u0007?\u0002\u0002\u00fd\u00fe\u0007#\u0002",
    "\u0002\u00fe\u010c\u0007?\u0002\u0002\u00ff\u0100\u0007?\u0002\u0002",
    "\u0100\u0101\u0007?\u0002\u0002\u0101\u010c\u0007?\u0002\u0002\u0102",
    "\u0103\u0007#\u0002\u0002\u0103\u0104\u0007?\u0002\u0002\u0104\u010c",
    "\u0007?\u0002\u0002\u0105\u010c\u0007@\u0002\u0002\u0106\u0107\u0007",
    "@\u0002\u0002\u0107\u010c\u0007?\u0002\u0002\u0108\u010c\u0007>\u0002",
    "\u0002\u0109\u010a\u0007>\u0002\u0002\u010a\u010c\u0007?\u0002\u0002",
    "\u010b\u00fb\u0003\u0002\u0002\u0002\u010b\u00fd\u0003\u0002\u0002\u0002",
    "\u010b\u00ff\u0003\u0002\u0002\u0002\u010b\u0102\u0003\u0002\u0002\u0002",
    "\u010b\u0105\u0003\u0002\u0002\u0002\u010b\u0106\u0003\u0002\u0002\u0002",
    "\u010b\u0108\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002",
    "\u010c-\u0003\u0002\u0002\u0002\u010d\u010e\u0007(\u0002\u0002\u010e",
    "\u0113\u0007(\u0002\u0002\u010f\u0110\u0007c\u0002\u0002\u0110\u0111",
    "\u0007p\u0002\u0002\u0111\u0113\u0007f\u0002\u0002\u0112\u010d\u0003",
    "\u0002\u0002\u0002\u0112\u010f\u0003\u0002\u0002\u0002\u0113/\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007~\u0002\u0002\u0115\u0119\u0007",
    "~\u0002\u0002\u0116\u0117\u0007q\u0002\u0002\u0117\u0119\u0007t\u0002",
    "\u0002\u0118\u0114\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002",
    "\u0002\u01191\u0003\u0002\u0002\u0002\u011a\u011b\u0007#\u0002\u0002",
    "\u011b3\u0003\u0002\u0002\u0002\u011c\u011d\u0007=\u0002\u0002\u011d",
    "5\u0003\u0002\u0002\u0002\u011e\u011f\u00071\u0002\u0002\u011f\u0120",
    "\u0007,\u0002\u0002\u0120\u0124\u0003\u0002\u0002\u0002\u0121\u0123",
    "\u000b\u0002\u0002\u0002\u0122\u0121\u0003\u0002\u0002\u0002\u0123\u0126",
    "\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0124\u0122",
    "\u0003\u0002\u0002\u0002\u0125\u0127\u0003\u0002\u0002\u0002\u0126\u0124",
    "\u0003\u0002\u0002\u0002\u0127\u0128\u0007,\u0002\u0002\u0128\u0129",
    "\u00071\u0002\u0002\u01297\u0003\u0002\u0002\u0002\u012a\u012b\u0007",
    "/\u0002\u0002\u012b\u012c\u0007/\u0002\u0002\u012c\u012d\u0007\"\u0002",
    "\u0002\u012d\u0131\u0003\u0002\u0002\u0002\u012e\u0130\n\f\u0002\u0002",
    "\u012f\u012e\u0003\u0002\u0002\u0002\u0130\u0133\u0003\u0002\u0002\u0002",
    "\u0131\u012f\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002",
    "\u01329\u0003\u0002\u0002\u0002\u0133\u0131\u0003\u0002\u0002\u0002",
    "\u0134\u0139\u0005@ \u0002\u0135\u0136\u00070\u0002\u0002\u0136\u0138",
    "\u0005@ \u0002\u0137\u0135\u0003\u0002\u0002\u0002\u0138\u013b\u0003",
    "\u0002\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u0139\u013a\u0003",
    "\u0002\u0002\u0002\u013a;\u0003\u0002\u0002\u0002\u013b\u0139\u0003",
    "\u0002\u0002\u0002\u013c\u013e\u0007B\u0002\u0002\u013d\u013f\u0007",
    "B\u0002\u0002\u013e\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003",
    "\u0002\u0002\u0002\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0144\u0005",
    "@ \u0002\u0141\u0143\u0005>\u001f\u0002\u0142\u0141\u0003\u0002\u0002",
    "\u0002\u0143\u0146\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0151\u0003\u0002\u0002",
    "\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0147\u0148\u00070\u0002",
    "\u0002\u0148\u014c\u0005@ \u0002\u0149\u014b\u0005>\u001f\u0002\u014a",
    "\u0149\u0003\u0002\u0002\u0002\u014b\u014e\u0003\u0002\u0002\u0002\u014c",
    "\u014a\u0003\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d",
    "\u0150\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014f",
    "\u0147\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002\u0002\u0151",
    "\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152",
    "\u0155\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0154",
    "\u0156\u0007B\u0002\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155",
    "\u0156\u0003\u0002\u0002\u0002\u0156\u0173\u0003\u0002\u0002\u0002\u0157",
    "\u0159\u0007&\u0002\u0002\u0158\u015a\u0007&\u0002\u0002\u0159\u0158",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015b",
    "\u0003\u0002\u0002\u0002\u015b\u015f\u0005@ \u0002\u015c\u015e\u0005",
    ">\u001f\u0002\u015d\u015c\u0003\u0002\u0002\u0002\u015e\u0161\u0003",
    "\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160\u016c\u0003\u0002\u0002\u0002\u0161\u015f\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u00070\u0002\u0002\u0163\u0167\u0005",
    "@ \u0002\u0164\u0166\u0005>\u001f\u0002\u0165\u0164\u0003\u0002\u0002",
    "\u0002\u0166\u0169\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002",
    "\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002",
    "\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u016a\u0162\u0003\u0002\u0002",
    "\u0002\u016b\u016e\u0003\u0002\u0002\u0002\u016c\u016a\u0003\u0002\u0002",
    "\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u0170\u0003\u0002\u0002",
    "\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016f\u0171\u0007&\u0002",
    "\u0002\u0170\u016f\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002",
    "\u0002\u0171\u0173\u0003\u0002\u0002\u0002\u0172\u013c\u0003\u0002\u0002",
    "\u0002\u0172\u0157\u0003\u0002\u0002\u0002\u0173=\u0003\u0002\u0002",
    "\u0002\u0174\u017b\u0007]\u0002\u0002\u0175\u0177\u0005\u001c\u000e",
    "\u0002\u0176\u0175\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002\u0002",
    "\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002",
    "\u0002\u0179\u017c\u0003\u0002\u0002\u0002\u017a\u017c\u0005@ \u0002",
    "\u017b\u0176\u0003\u0002\u0002\u0002\u017b\u017a\u0003\u0002\u0002\u0002",
    "\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017e\u0007_\u0002\u0002",
    "\u017e?\u0003\u0002\u0002\u0002\u017f\u0183\t\r\u0002\u0002\u0180\u0182",
    "\t\u000e\u0002\u0002\u0181\u0180\u0003\u0002\u0002\u0002\u0182\u0185",
    "\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002\u0002\u0002\u0183\u0184",
    "\u0003\u0002\u0002\u0002\u0184A\u0003\u0002\u0002\u0002\u0185\u0183",
    "\u0003\u0002\u0002\u0002\u0186\u0188\t\u000f\u0002\u0002\u0187\u0186",
    "\u0003\u0002\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u0187",
    "\u0003\u0002\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002\u018a\u018b",
    "\u0003\u0002\u0002\u0002\u018b\u018c\b!\u0007\u0002\u018cC\u0003\u0002",
    "\u0002\u0002\u018d\u018e\u0007%\u0002\u0002\u018e\u018f\u0007u\u0002",
    "\u0002\u018f\u0190\u0007s\u0002\u0002\u0190\u01ae\u0007n\u0002\u0002",
    "\u0191\u0192\u0007%\u0002\u0002\u0192\u0193\u0007u\u0002\u0002\u0193",
    "\u0194\u0007g\u0002\u0002\u0194\u0195\u0007n\u0002\u0002\u0195\u0196",
    "\u0007g\u0002\u0002\u0196\u0197\u0007e\u0002\u0002\u0197\u01ae\u0007",
    "v\u0002\u0002\u0198\u0199\u0007%\u0002\u0002\u0199\u019a\u0007k\u0002",
    "\u0002\u019a\u019b\u0007p\u0002\u0002\u019b\u019c\u0007u\u0002\u0002",
    "\u019c\u019d\u0007g\u0002\u0002\u019d\u019e\u0007t\u0002\u0002\u019e",
    "\u01ae\u0007v\u0002\u0002\u019f\u01a0\u0007%\u0002\u0002\u01a0\u01a1",
    "\u0007w\u0002\u0002\u01a1\u01a2\u0007r\u0002\u0002\u01a2\u01a3\u0007",
    "f\u0002\u0002\u01a3\u01a4\u0007c\u0002\u0002\u01a4\u01a5\u0007v\u0002",
    "\u0002\u01a5\u01ae\u0007g\u0002\u0002\u01a6\u01a7\u0007%\u0002\u0002",
    "\u01a7\u01a8\u0007f\u0002\u0002\u01a8\u01a9\u0007g\u0002\u0002\u01a9",
    "\u01aa\u0007n\u0002\u0002\u01aa\u01ab\u0007g\u0002\u0002\u01ab\u01ac",
    "\u0007v\u0002\u0002\u01ac\u01ae\u0007g\u0002\u0002\u01ad\u018d\u0003",
    "\u0002\u0002\u0002\u01ad\u0191\u0003\u0002\u0002\u0002\u01ad\u0198\u0003",
    "\u0002\u0002\u0002\u01ad\u019f\u0003\u0002\u0002\u0002\u01ad\u01a6\u0003",
    "\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01b0\b",
    "\"\b\u0002\u01b0E\u0003\u0002\u0002\u0002\u01b1\u01b2\u0007%\u0002\u0002",
    "\u01b2\u01b3\u0007k\u0002\u0002\u01b3\u01b4\u0007h\u0002\u0002\u01b4",
    "\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b6\b#\t\u0002\u01b6G\u0003\u0002",
    "\u0002\u0002\u01b7\u01b8\u0007%\u0002\u0002\u01b8\u01b9\u0007h\u0002",
    "\u0002\u01b9\u01ba\u0007q\u0002\u0002\u01ba\u01bb\u0007t\u0002\u0002",
    "\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc\u01bd\b$\n\u0002\u01bdI\u0003",
    "\u0002\u0002\u0002\u01be\u01bf\u0007%\u0002\u0002\u01bf\u01c0\u0007",
    "h\u0002\u0002\u01c0\u01c1\u0007q\u0002\u0002\u01c1\u01c2\u0007t\u0002",
    "\u0002\u01c2\u01c3\u0007g\u0002\u0002\u01c3\u01c4\u0007c\u0002\u0002",
    "\u01c4\u01c5\u0007e\u0002\u0002\u01c5\u01c6\u0007j\u0002\u0002\u01c6",
    "\u01c7\u0003\u0002\u0002\u0002\u01c7\u01c8\b%\u000b\u0002\u01c8K\u0003",
    "\u0002\u0002\u0002\u01c9\u01ca\u0007%\u0002\u0002\u01ca\u01cb\u0007",
    "k\u0002\u0002\u01cb\u01cc\u0007p\u0002\u0002\u01cc\u01cd\u0007e\u0002",
    "\u0002\u01cd\u01ce\u0007n\u0002\u0002\u01ce\u01cf\u0007w\u0002\u0002",
    "\u01cf\u01d0\u0007f\u0002\u0002\u01d0\u01d1\u0007g\u0002\u0002\u01d1",
    "\u01d2\u0003\u0002\u0002\u0002\u01d2\u01d3\b&\f\u0002\u01d3M\u0003\u0002",
    "\u0002\u0002\u01d4\u01d5\u0007\u007f\u0002\u0002\u01d5\u01d6\b\'\r\u0002",
    "\u01d6O\u0003\u0002\u0002\u0002\u01d7\u01d8\u0005<\u001e\u0002\u01d8",
    "Q\u0003\u0002\u0002\u0002\u01d9\u01db\u0007\u000f\u0002\u0002\u01da",
    "\u01d9\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db",
    "\u01dc\u0003\u0002\u0002\u0002\u01dc\u01de\u0007\f\u0002\u0002\u01dd",
    "\u01da\u0003\u0002\u0002\u0002\u01de\u01df\u0003\u0002\u0002\u0002\u01df",
    "\u01dd\u0003\u0002\u0002\u0002\u01df\u01e0\u0003\u0002\u0002\u0002\u01e0",
    "S\u0003\u0002\u0002\u0002\u01e1\u01e5\n\u0010\u0002\u0002\u01e2\u01e3",
    "\u0007%\u0002\u0002\u01e3\u01e5\u0007%\u0002\u0002\u01e4\u01e1\u0003",
    "\u0002\u0002\u0002\u01e4\u01e2\u0003\u0002\u0002\u0002\u01e5\u01e6\u0003",
    "\u0002\u0002\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002\u01e6\u01e7\u0003",
    "\u0002\u0002\u0002\u01e7U\u0003\u0002\u0002\u00020\u0002\u0003v\u009c",
    "\u00a2\u00a5\u00a7\u00af\u00b2\u00b4\u00b8\u00c3\u00ca\u00cd\u00d0\u00d6",
    "\u00d9\u00e0\u00e3\u00e7\u010b\u0112\u0118\u0124\u0131\u0139\u013e\u0144",
    "\u014c\u0151\u0155\u0159\u015f\u0167\u016c\u0170\u0172\u0178\u017b\u0183",
    "\u0189\u01ad\u01da\u01df\u01e4\u01e6\u000e\u0003\u0002\u0002\u0003\u0003",
    "\u0003\u0003\u0004\u0004\u0003\u0005\u0005\u0003\u0007\u0006\b\u0002",
    "\u0002\u0003\"\u0007\u0003#\b\u0003$\t\u0003%\n\u0003&\u000b\u0003\'",
    "\f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function JustMapLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

JustMapLexer.prototype = Object.create(antlr4.Lexer.prototype);
JustMapLexer.prototype.constructor = JustMapLexer;

JustMapLexer.EOF = antlr4.Token.EOF;
JustMapLexer.HashSql = 1;
JustMapLexer.HashInclude = 2;
JustMapLexer.COLON = 3;
JustMapLexer.OpenBrace = 4;
JustMapLexer.OpenParen = 5;
JustMapLexer.CloseParen = 6;
JustMapLexer.IN = 7;
JustMapLexer.BOOL = 8;
JustMapLexer.STR = 9;
JustMapLexer.NUM = 10;
JustMapLexer.VAR = 11;
JustMapLexer.INC = 12;
JustMapLexer.DEC = 13;
JustMapLexer.MULDIV = 14;
JustMapLexer.ADDSUB = 15;
JustMapLexer.EQUAL = 16;
JustMapLexer.CMP = 17;
JustMapLexer.AND = 18;
JustMapLexer.OR = 19;
JustMapLexer.NOT = 20;
JustMapLexer.SEMICOLON = 21;
JustMapLexer.BlockComment = 22;
JustMapLexer.LineComment = 23;
JustMapLexer.SqlId = 24;
JustMapLexer.ID = 25;
JustMapLexer.IDX = 26;
JustMapLexer.SYNTAX = 27;
JustMapLexer.WS = 28;
JustMapLexer.HashSql0 = 29;
JustMapLexer.HashIf = 30;
JustMapLexer.HashFor = 31;
JustMapLexer.HashForeach = 32;
JustMapLexer.HashInclude0 = 33;
JustMapLexer.CloseBrace = 34;
JustMapLexer.Param = 35;
JustMapLexer.NL = 36;
JustMapLexer.TEXT = 37;

JustMapLexer.TEXT_MODE = 1;

JustMapLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

JustMapLexer.prototype.modeNames = [ "DEFAULT_MODE", "TEXT_MODE" ];

JustMapLexer.prototype.literalNames = [ null, null, null, "':'", "'{'", 
                                        "'('", "')'", "'in'", null, null, 
                                        null, "'var'", "'++'", "'--'", null, 
                                        null, "'='", null, null, null, "'!'", 
                                        "';'", null, null, null, null, null, 
                                        null, null, null, "'#if'", "'#for'", 
                                        "'#foreach'", null, "'}'" ];

JustMapLexer.prototype.symbolicNames = [ null, "HashSql", "HashInclude", 
                                         "COLON", "OpenBrace", "OpenParen", 
                                         "CloseParen", "IN", "BOOL", "STR", 
                                         "NUM", "VAR", "INC", "DEC", "MULDIV", 
                                         "ADDSUB", "EQUAL", "CMP", "AND", 
                                         "OR", "NOT", "SEMICOLON", "BlockComment", 
                                         "LineComment", "SqlId", "ID", "IDX", 
                                         "SYNTAX", "WS", "HashSql0", "HashIf", 
                                         "HashFor", "HashForeach", "HashInclude0", 
                                         "CloseBrace", "Param", "NL", "TEXT" ];

JustMapLexer.prototype.ruleNames = [ "HashSql", "HashInclude", "COLON", 
                                     "OpenBrace", "OpenParen", "CloseParen", 
                                     "IN", "BOOL", "STR", "UNICODE", "HEX", 
                                     "NUM", "INT", "EXP", "VAR", "INC", 
                                     "DEC", "MULDIV", "ADDSUB", "EQUAL", 
                                     "CMP", "AND", "OR", "NOT", "SEMICOLON", 
                                     "BlockComment", "LineComment", "SqlId", 
                                     "ID", "IDX", "SYNTAX", "WS", "HashSql0", 
                                     "HashIf", "HashFor", "HashForeach", 
                                     "HashInclude0", "CloseBrace", "Param", 
                                     "NL", "TEXT" ];

JustMapLexer.prototype.grammarFileName = "JustMapLexer.g4";


    JustMapLexer.DEFAULT_MODE = 0;
	JustMapLexer.prototype.statementStack = [];
	JustMapLexer.prototype.currentStatement = function() {
		return this.statementStack.length == 0 ? null : this.statementStack[this.statementStack.length - 1];
	}
	JustMapLexer.prototype.pushStatement = function(statement) {
		this.statementStack.push(statement);
	}
	JustMapLexer.prototype.popStatement = function() {
		return this.statementStack.pop();
	}
	JustMapLexer.prototype.pushStack = function(statement) {
		this.pushStatement(statement);
		this.pushMode(JustMapLexer.DEFAULT_MODE);
	}
	JustMapLexer.prototype.popStack = function() {
		this.popMode();
		this.popStatement();
	}
	JustMapLexer.prototype.popStack2 = function() {
		this.popStatement();
		this.popMode();
		if(this._modeStack.length > 0) {
			this.popMode();
		}
	}
	JustMapLexer.prototype.clearStack = function() {
		while(this.statementStack.length > 0) {
			this.popStatement();
		}
		while(this._modeStack.length > 0) {
			this.popMode();
		}
	}
	JustMapLexer.prototype.printStack = function() {
		/*
		console.log(this.currentStatement() 
			+ '\t' + this._mode 
			+ '\t' + this.statementStack.length 
			+ '\t' + this._modeStack.length);
		 */
	}


JustMapLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 0:
		this.HashSql_action(localctx, actionIndex);
		break;
	case 1:
		this.HashInclude_action(localctx, actionIndex);
		break;
	case 2:
		this.COLON_action(localctx, actionIndex);
		break;
	case 3:
		this.OpenBrace_action(localctx, actionIndex);
		break;
	case 5:
		this.CloseParen_action(localctx, actionIndex);
		break;
	case 32:
		this.HashSql0_action(localctx, actionIndex);
		break;
	case 33:
		this.HashIf_action(localctx, actionIndex);
		break;
	case 34:
		this.HashFor_action(localctx, actionIndex);
		break;
	case 35:
		this.HashForeach_action(localctx, actionIndex);
		break;
	case 36:
		this.HashInclude0_action(localctx, actionIndex);
		break;
	case 37:
		this.CloseBrace_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

JustMapLexer.prototype.HashSql_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

			this.clearStack();
			this.pushStack("sql");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashInclude_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 1:

			this.pushStack("include");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.COLON_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 2:

			if(this.currentStatement() == "sql"){
				this.pushMode(JustMapLexer.TEXT_MODE);
			}
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.OpenBrace_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 3:

			if(this.currentStatement() == "sql" 
			|| this.currentStatement() == "if" 
			|| this.currentStatement() == "for"
			|| this.currentStatement() == "foreach"){
				this.pushMode(JustMapLexer.TEXT_MODE);
			}
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.CloseParen_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 4:

			if(this.currentStatement() == "include"){
				this.popStack();
			}
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashSql0_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 5:

			this.clearStack();
			this.pushStack("sql");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashIf_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 6:

			this.pushStack("if");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashFor_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 7:

			this.pushStack("for");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashForeach_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 8:

			this.pushStack("foreach");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.HashInclude0_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 9:

			this.pushStack("include");
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

JustMapLexer.prototype.CloseBrace_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 10:

			this.popStack2();
			this.printStack();

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.JustMapLexer = JustMapLexer;
